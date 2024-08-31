"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("@prisma/client");
let UnitsService = class UnitsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUnitDto) {
        try {
            return await this.prisma.unit.create({
                data: {
                    ...createUnitDto,
                    lastMaintenanceDate: createUnitDto.lastMaintenanceDate ? new Date(createUnitDto.lastMaintenanceDate) : null,
                },
            });
        }
        catch (error) {
            console.error('Error creating unit:', error);
            throw new Error('Failed to create unit');
        }
    }
    async findAll() {
        const units = await this.prisma.unit.findMany();
        return units.map(unit => this.checkMaintenanceAlert(unit));
    }
    checkMaintenanceAlert(unit) {
        const currentDate = new Date();
        let alertMessage = '';
        if (unit.lastMaintenanceDate) {
            const lastMaintenanceDate = new Date(unit.lastMaintenanceDate);
            const mileageSinceLastMaintenance = unit.currentMileage - (unit.lastMaintenanceMileage || 0);
            const oneMonthAgo = new Date(lastMaintenanceDate);
            oneMonthAgo.setMonth(oneMonthAgo.getMonth() + 1);
            if (currentDate >= oneMonthAgo) {
                alertMessage = 'MANTENIMIENTO: Hace más de un mes fue el último mantenimiento!.';
            }
            else if (mileageSinceLastMaintenance >= 10000) {
                alertMessage = 'MANTENIMIENTO: El último mantenimiento fue hace más de 10,000 km!.';
            }
        }
        return {
            ...unit,
            maintenanceAlert: alertMessage || 'Aún no requiere mantenimiento.',
        };
    }
    async findOne(id) {
        const unit = await this.prisma.unit.findUnique({
            where: { id },
        });
        if (!unit) {
            throw new common_1.NotFoundException(`Unit with ID ${id} not found.`);
        }
        return this.checkMaintenanceAlert(unit);
    }
    async update(id, updateUnitDto) {
        return this.prisma.unit.update({
            where: { id },
            data: {
                ...updateUnitDto,
                lastMaintenanceDate: updateUnitDto.lastMaintenanceDate ? new Date(updateUnitDto.lastMaintenanceDate) : null,
            },
        });
    }
    async remove(id) {
        return this.prisma.unit.delete({
            where: { id },
        });
    }
    async sendUnitToMaintenance(unitId) {
        const unit = await this.findOne(unitId);
        if (!unit) {
            throw new common_1.NotFoundException(`Unit with ID ${unitId} not found.`);
        }
        if (unit.status === client_1.UnitStatus.MAINTENANCE) {
            throw new common_1.BadRequestException('Unit is already in maintenance.');
        }
        return this.prisma.unit.update({
            where: { id: unitId },
            data: {
                status: client_1.UnitStatus.MAINTENANCE,
            },
        });
    }
    async findUnitsNotReturned() {
        return this.prisma.unit.findMany({
            where: {
                status: client_1.UnitStatus.ASSIGNED,
            },
        });
    }
    async registerReturn(unitId, mileage, fuelLevel) {
        const unit = await this.prisma.unit.findUnique({
            where: { id: unitId },
        });
        if (!unit) {
            throw new common_1.NotFoundException(`Unit with ID ${unitId} not found.`);
        }
        if (unit.status !== client_1.UnitStatus.ASSIGNED) {
            throw new common_1.BadRequestException('Unit is not in assigned status.');
        }
        const lastMaintenanceMileage = unit.lastMaintenanceMileage || 0;
        const distanceSinceLastMaintenance = mileage - lastMaintenanceMileage;
        const maintenanceAlert = this.checkMaintenanceAlertOnReturn(unit.lastMaintenanceDate, mileage, distanceSinceLastMaintenance);
        const updatedUnit = await this.prisma.unit.update({
            where: { id: unitId },
            data: {
                status: client_1.UnitStatus.AVAILABLE,
                currentMileage: mileage,
                fuelLevel: fuelLevel,
            },
        });
        return { unit: updatedUnit, maintenanceAlert };
    }
    checkMaintenanceAlertOnReturn(lastMaintenanceDate, currentMileage, distanceSinceLastMaintenance) {
        const currentDate = new Date();
        let alertMessage = '';
        if (lastMaintenanceDate) {
            const oneMonthAgo = new Date(lastMaintenanceDate);
            oneMonthAgo.setMonth(oneMonthAgo.getMonth() + 1);
            if (currentDate >= oneMonthAgo) {
                alertMessage = 'MANTENIMIENTO: Hace más de un mes fue el último mantenimiento!.';
            }
            else if (distanceSinceLastMaintenance >= 10000) {
                alertMessage = 'MANTENIMIENTO: El último mantenimiento fue hace más de 10,000 km!.';
            }
        }
        return alertMessage || null;
    }
};
exports.UnitsService = UnitsService;
exports.UnitsService = UnitsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UnitsService);
//# sourceMappingURL=units.service.js.map