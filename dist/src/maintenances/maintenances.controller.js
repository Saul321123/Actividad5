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
exports.MaintenancesController = void 0;
const common_1 = require("@nestjs/common");
const maintenances_service_1 = require("./maintenances.service");
const create_maintenances_dto_1 = require("./dto/create.maintenances.dto");
const update_maintenances_dto_1 = require("./dto/update-maintenances.dto");
const swagger_1 = require("@nestjs/swagger");
let MaintenancesController = class MaintenancesController {
    constructor(maintenancesService) {
        this.maintenancesService = maintenancesService;
    }
    create(createMaintenanceDto) {
        return this.maintenancesService.create(createMaintenanceDto);
    }
    findAll() {
        return this.maintenancesService.findAll();
    }
    findOne(id) {
        return this.maintenancesService.findOne(+id);
    }
    update(id, updateMaintenanceDto) {
        return this.maintenancesService.update(+id, updateMaintenanceDto);
    }
    remove(id) {
        return this.maintenancesService.remove(+id);
    }
};
exports.MaintenancesController = MaintenancesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_maintenances_dto_1.CreateMaintenanceDto]),
    __metadata("design:returntype", void 0)
], MaintenancesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MaintenancesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MaintenancesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_maintenances_dto_1.UpdateMaintenanceDto]),
    __metadata("design:returntype", void 0)
], MaintenancesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MaintenancesController.prototype, "remove", null);
exports.MaintenancesController = MaintenancesController = __decorate([
    (0, swagger_1.ApiTags)('maintenances'),
    (0, common_1.Controller)('maintenances'),
    __metadata("design:paramtypes", [maintenances_service_1.MaintenancesService])
], MaintenancesController);
//# sourceMappingURL=maintenances.controller.js.map