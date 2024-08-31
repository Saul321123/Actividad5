import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UnitsModule } from './units/units.module';
import { PlacesModule } from './places/places.module';
import { AssignmentsModule } from './assignments/assignmets.module';
import { MaintenancesModule } from './maintenances/maintenances.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    UnitsModule,
    PlacesModule,
    AssignmentsModule,
    MaintenancesModule,
  ],
})
export class AppModule {}

