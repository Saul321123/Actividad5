import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { UnitStatus } from '@prisma/client';

@Injectable()
export class UnitsService {
  constructor(private prisma: PrismaService) {}

  async create(createUnitDto: CreateUnitDto) {
    try {
      return await this.prisma.unit.create({
        data: {
          ...createUnitDto,
          lastMaintenanceDate: createUnitDto.lastMaintenanceDate ? new Date(createUnitDto.lastMaintenanceDate) : null,
        },
      });
    } catch (error) {
      console.error('Error creating unit:', error);
      throw new Error('Failed to create unit');
    }
  }

  async findAll() {
    const units = await this.prisma.unit.findMany();
    return units.map(unit => this.checkMaintenanceAlert(unit));
  }

  private checkMaintenanceAlert(unit: any) {
    const currentDate = new Date();
    let alertMessage = '';

    if (unit.lastMaintenanceDate) {
      const lastMaintenanceDate = new Date(unit.lastMaintenanceDate);
      const mileageSinceLastMaintenance = unit.currentMileage - (unit.lastMaintenanceMileage || 0);

      // Verifica si ha pasado un mes desde el último mantenimiento
      const oneMonthAgo = new Date(lastMaintenanceDate);
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() + 1);

      if (currentDate >= oneMonthAgo) {
        alertMessage = 'MANTENIMIENTO: Hace más de un mes fue el último mantenimiento!.';
      } 
      // Verifica si el kilometraje está por alcanzar los 10,000 km desde el último mantenimiento
      else if (mileageSinceLastMaintenance >= 10000) {
        alertMessage = 'MANTENIMIENTO: El último mantenimiento fue hace más de 10,000 km!.';
      }
    }

    return {
      ...unit,
      maintenanceAlert: alertMessage || 'Aún no requiere mantenimiento.',
    };
  }

  async findOne(id: number) {
    const unit = await this.prisma.unit.findUnique({
      where: { id },
    });

    if (!unit) {
      throw new NotFoundException(`Unit with ID ${id} not found.`);
    }

    return this.checkMaintenanceAlert(unit);
  }

  async update(id: number, updateUnitDto: UpdateUnitDto) {
    return this.prisma.unit.update({
      where: { id },
      data: {
        ...updateUnitDto,
        lastMaintenanceDate: updateUnitDto.lastMaintenanceDate ? new Date(updateUnitDto.lastMaintenanceDate) : null,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.unit.delete({
      where: { id },
    });
  }

  async sendUnitToMaintenance(unitId: number) {
    const unit = await this.findOne(unitId);
    
    if (!unit) {
      throw new NotFoundException(`Unit with ID ${unitId} not found.`);
    }

    if (unit.status === UnitStatus.MAINTENANCE) {
      throw new BadRequestException('Unit is already in maintenance.');
    }

    return this.prisma.unit.update({
      where: { id: unitId },
      data: {
        status: UnitStatus.MAINTENANCE,
      },
    });
  }

  async findUnitsNotReturned() {
    return this.prisma.unit.findMany({
      where: {
        status: UnitStatus.ASSIGNED,
      },
    });
  }

  async registerReturn(unitId: number, mileage: number, fuelLevel: number) {
    const unit = await this.prisma.unit.findUnique({
      where: { id: unitId },
    });
    
    if (!unit) {
      throw new NotFoundException(`Unit with ID ${unitId} not found.`);
    }

    if (unit.status !== UnitStatus.ASSIGNED) {
      throw new BadRequestException('Unit is not in assigned status.');
    }

    const lastMaintenanceMileage = unit.lastMaintenanceMileage || 0;
    const distanceSinceLastMaintenance = mileage - lastMaintenanceMileage;
    const maintenanceAlert = this.checkMaintenanceAlertOnReturn(unit.lastMaintenanceDate, mileage, distanceSinceLastMaintenance);

    const updatedUnit = await this.prisma.unit.update({
      where: { id: unitId },
      data: {
        status: UnitStatus.AVAILABLE,
        currentMileage: mileage,
        fuelLevel: fuelLevel,
      },
    });

    return { unit: updatedUnit, maintenanceAlert };
  }

  private checkMaintenanceAlertOnReturn(lastMaintenanceDate: Date | null, currentMileage: number, distanceSinceLastMaintenance: number): string | null {
    const currentDate = new Date();
    let alertMessage = '';

    if (lastMaintenanceDate) {
      const oneMonthAgo = new Date(lastMaintenanceDate);
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() + 1);

      // Verifica si ha pasado un mes desde el último mantenimiento
      if (currentDate >= oneMonthAgo) {
        alertMessage = 'MANTENIMIENTO: Hace más de un mes fue el último mantenimiento!.';
      } 
      // Verifica si el kilometraje está por alcanzar los 10,000 km desde el último mantenimiento
      else if (distanceSinceLastMaintenance >= 10000) {
        alertMessage = 'MANTENIMIENTO: El último mantenimiento fue hace más de 10,000 km!.';
      }
    }

    return alertMessage || null;
  }
}





