import { Module } from '@nestjs/common';
import { MaintenancesService } from './maintenances.service';
import { MaintenancesController } from './maintenances.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { UnitsModule } from '../units/units.module'; // Importa UnitsModule

@Module({
  imports: [PrismaModule, UnitsModule], // Agrega UnitsModule a los imports
  providers: [MaintenancesService],
  controllers: [MaintenancesController],
})
export class MaintenancesModule {}
