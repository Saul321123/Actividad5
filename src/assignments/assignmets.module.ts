import { Module } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { AssignmentsController } from './assignaments.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { UnitsModule } from '../units/units.module'; // Importa UnitsModule

@Module({
  providers: [AssignmentsService],
  controllers: [AssignmentsController],
  imports: [PrismaModule, UnitsModule], // Agrega UnitsModule a los imports
})
export class AssignmentsModule {}
