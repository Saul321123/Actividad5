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
exports.PlacesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PlacesService = class PlacesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPlaceDto) {
        return this.prisma.place.create({
            data: createPlaceDto,
        });
    }
    async findAll() {
        return this.prisma.place.findMany();
    }
    async findOne(id) {
        return this.prisma.place.findUnique({
            where: { id },
        });
    }
    async update(id, updatePlaceDto) {
        try {
            return await this.prisma.place.update({
                where: { id },
                data: updatePlaceDto,
            });
        }
        catch (error) {
            console.error('Error updating place:', error);
            throw new Error('Unable to update place');
        }
    }
    async remove(id) {
        return this.prisma.place.delete({
            where: { id },
        });
    }
};
exports.PlacesService = PlacesService;
exports.PlacesService = PlacesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PlacesService);
//# sourceMappingURL=places.service.js.map