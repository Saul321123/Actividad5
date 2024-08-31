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
exports.AssignmentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const units_service_1 = require("../units/units.service");
const client_1 = require("@prisma/client");
let AssignmentsService = class AssignmentsService {
    constructor(prisma, unitsService) {
        this.prisma = prisma;
        this.unitsService = unitsService;
    }
    async create(createAssignmentDto) {
        const unit = await this.unitsService.findOne(createAssignmentDto.unitId);
        if (!unit) {
            throw new common_1.NotFoundException(`Unit with ID ${createAssignmentDto.unitId} not found.`);
        }
        if (unit.status === client_1.UnitStatus.DECOMMISSIONED) {
            throw new common_1.BadRequestException('Unit is decommissioned and cannot be assigned.');
        }
        await this.unitsService.update(createAssignmentDto.unitId, {
            status: client_1.UnitStatus.ASSIGNED,
        });
        return this.prisma.assignment.create({
            data: createAssignmentDto,
        });
    }
    async findAll() {
        return this.prisma.assignment.findMany();
    }
    async findOne(id) {
        return this.prisma.assignment.findUnique({
            where: { id },
        });
    }
    async update(id, updateAssignmentDto) {
        return this.prisma.assignment.update({
            where: { id },
            data: updateAssignmentDto,
        });
    }
    async remove(id) {
        return this.prisma.assignment.delete({
            where: { id },
        });
    }
};
exports.AssignmentsService = AssignmentsService;
exports.AssignmentsService = AssignmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        units_service_1.UnitsService])
], AssignmentsService);
//# sourceMappingURL=assignments.service.js.map