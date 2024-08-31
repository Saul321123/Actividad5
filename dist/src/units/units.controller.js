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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const units_service_1 = require("./units.service");
const create_unit_dto_1 = require("./dto/create-unit.dto");
const update_unit_dto_1 = require("./dto/update-unit.dto");
const return_dto_1 = require("./dto/return.dto");
let UnitsController = class UnitsController {
    constructor(unitsService) {
        this.unitsService = unitsService;
    }
    create(createUnitDto) {
        return this.unitsService.create(createUnitDto);
    }
    findAll() {
        return this.unitsService.findAll();
    }
    findUnitsNotReturned() {
        return this.unitsService.findUnitsNotReturned();
    }
    findOne(id) {
        return this.unitsService.findOne(+id);
    }
    update(id, updateUnitDto) {
        return this.unitsService.update(+id, updateUnitDto);
    }
    registerReturn(id, returnDto) {
        return this.unitsService.registerReturn(+id, returnDto.mileage, returnDto.fuelLevel);
    }
    remove(id) {
        return this.unitsService.remove(+id);
    }
};
exports.UnitsController = UnitsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear unidad' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'La unidad ha sido creada exitosamente.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Solicitud incorrecta.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_unit_dto_1.CreateUnitDto]),
    __metadata("design:returntype", void 0)
], UnitsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las unidades' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Devuelve todas las unidades.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UnitsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('not-returned'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener unidades que no han sido retornadas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Devuelve las unidades que no han sido retornadas.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UnitsController.prototype, "findUnitsNotReturned", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener unidad por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Devuelve la unidad con el ID especificado.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Unidad no encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UnitsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar unidad' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiBody)({ type: update_unit_dto_1.UpdateUnitDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'La unidad ha sido actualizada exitosamente.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Unidad no encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_unit_dto_1.UpdateUnitDto]),
    __metadata("design:returntype", void 0)
], UnitsController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/return'),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar retorno de unidad' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiBody)({ type: return_dto_1.ReturnDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'El retorno de la unidad ha sido registrado exitosamente.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Unidad no encontrada.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'La unidad no está en estado asignado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, return_dto_1.ReturnDto]),
    __metadata("design:returntype", void 0)
], UnitsController.prototype, "registerReturn", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar unidad' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'La unidad ha sido eliminada exitosamente.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Unidad no encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UnitsController.prototype, "remove", null);
exports.UnitsController = UnitsController = __decorate([
    (0, swagger_1.ApiTags)('units'),
    (0, common_1.Controller)('units'),
    __metadata("design:paramtypes", [units_service_1.UnitsService])
], UnitsController);
//# sourceMappingURL=units.controller.js.map