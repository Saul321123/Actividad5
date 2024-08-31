import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateMaintenanceDto } from './dto/create.maintenances.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenances.dto';
import { UnitsService } from '../units/units.service'; // Asegúrate de importar el servicio de unidades

@Injectable()
export class MaintenancesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly unitsService: UnitsService, // Inyecta el servicio de unidades
  ) {}

  async create(createMaintenanceDto: CreateMaintenanceDto) {
    try {
      // Crear el mantenimiento
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

      // Actualizar el estado de la unidad a 'MAINTENANCE'
      await this.unitsService.sendUnitToMaintenance(createMaintenanceDto.unitId);

      return maintenance;
    } catch (error) {
      console.error('Error creating maintenance:', error);
      throw new Error('Failed to create maintenance');
    }
  }

  async findAll() {
    return this.prisma.maintenance.findMany();
  }

  async findOne(id: number) {
    const maintenance = await this.prisma.maintenance.findUnique({
      where: { id },
    });

    if (!maintenance) {
      throw new NotFoundException(`Maintenance record with ID ${id} not found.`);
    }

    return maintenance;
  }

  async update(id: number, updateMaintenanceDto: UpdateMaintenanceDto) {
    const maintenance = await this.prisma.maintenance.findUnique({
      where: { id },
    });

    if (!maintenance) {
      throw new NotFoundException(`Maintenance record with ID ${id} not found.`);
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

  async remove(id: number) {
    const maintenance = await this.prisma.maintenance.findUnique({
      where: { id },
    });

    if (!maintenance) {
      throw new NotFoundException(`Maintenance record with ID ${id} not found.`);
    }

    return this.prisma.maintenance.delete({
      where: { id },
    });
  }
}

