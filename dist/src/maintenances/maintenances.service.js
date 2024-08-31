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
exports.MaintenancesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const units_service_1 = require("../units/units.service");
let MaintenancesService = class MaintenancesService {
    constructor(prisma, unitsService) {
        this.prisma = prisma;
        this.unitsService = unitsService;
    }
    async create(createMaintenanceDto) {
        try {
            const maintenance = await this.prisma.maintenance.create({
                data: {
                    unitId: createMaintenanceDto.unitId,
                    maintenanceType: createMaintenanceDto.maintenanceType,
                    date: createMaintenanceDto.date,
                    diagnosis: createMaintenanceDto.diagnosis,
                    description: createMaintenanceDto.description,
                    cost: createMaintenanceDto.cost,
                },
            });
            await this.unitsService.sendUnitToMaintenance(createMaintenanceDto.unitId);
            return maintenance;
        }
        catch (error) {
            console.error('Error creating maintenance:', error);
            throw new Error('Failed to create maintenance');
        }
    }
    async findAll() {
        return this.prisma.maintenance.findMany();
    }
    async findOne(id) {
        const maintenance = await this.prisma.maintenance.findUnique({
            where: { id },
        });
        if (!maintenance) {
            throw new common_1.NotFoundException(`Maintenance record with ID ${id} not found.`);
        }
        return maintenance;
    }
    async update(id, updateMaintenanceDto) {
        const maintenance = await this.prisma.maintenance.findUnique({
            where: { id },
        });
        if (!maintenance) {
            throw new common_1.NotFoundException(`Maintenance record with ID ${id} not found.`);
        }
        return this.prisma.maintenance.update({
            where: { id },
            data: {
                maintenanceType: updateMaintenanceDto.maintenanceType,
                date: updateMaintenanceDto.date,
                diagnosis: updateMaintenanceDto.diagnosis,
                description: updateMaintenanceDto.description,
                cost: updateMaintenanceDto.cost,
            },
        });
    }
    async remove(id) {
        const maintenance = await this.prisma.maintenance.findUnique({
            where: { id },
        });
        if (!maintenance) {
            throw new common_1.NotFoundException(`Maintenance record with ID ${id} not found.`);
        }
        return this.prisma.maintenance.delete({
            where: { id },
        });
    }
};
exports.MaintenancesService = MaintenancesService;
exports.MaintenancesService = MaintenancesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        units_service_1.UnitsService])
], MaintenancesService);
//# sourceMappingURL=maintenances.service.js.map