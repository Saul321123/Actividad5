import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { UnitsService } from './units.service';
import { UnitsController } from './units.controller';

@Module({
  imports: [PrismaModule], // Asegúrate de importar el módulo Prisma si es necesario
  providers: [UnitsService],
  controllers: [UnitsController],
  exports: [UnitsService], // Exporta UnitsService para que pueda ser usado en otros módulos
})
export class UnitsModule {}

