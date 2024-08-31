import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { UnitsService } from '../units/units.service'; // Asegúrate de importar UnitsService
import { UnitStatus } from '@prisma/client'; // Importar para unit.status

@Injectable()
export class AssignmentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly unitsService: UnitsService, // Inyección de UnitsService
  ) {}

  async create(createAssignmentDto: CreateAssignmentDto) {
    // Verifica que la unidad existe
    const unit = await this.unitsService.findOne(createAssignmentDto.unitId);

    if (!unit) {
      throw new NotFoundException(`Unit with ID ${createAssignmentDto.unitId} not found.`);
    }

    // Verifica el estado de la unidad
    if (unit.status === UnitStatus.DECOMMISSIONED) {
      throw new BadRequestException('Unit is decommissioned and cannot be assigned.');
    }

    // Actualiza el estado de la unidad a ASSIGNED
    await this.unitsService.update(createAssignmentDto.unitId, {
      status: UnitStatus.ASSIGNED, // Cambia el estado a ASSIGNED
    });

    // Crea la asignación
    return this.prisma.assignment.create({
      data: createAssignmentDto,
    });
  }

  async findAll() {
    return this.prisma.assignment.findMany();
  }

  async findOne(id: number) {
    return this.prisma.assignment.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateAssignmentDto: UpdateAssignmentDto) {
    return this.prisma.assignment.update({
      where: { id },
      data: updateAssignmentDto,
    });
  }

  async remove(id: number) {
    return this.prisma.assignment.delete({
      where: { id },
    });
  }
}


