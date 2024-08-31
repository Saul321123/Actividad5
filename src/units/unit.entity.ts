import { UnitStatus } from '@prisma/client';

export class Unit {
  id: number;
  brand: string;
  model: string;
  type: string;
  color: string;
  licensePlate: string;
  currentMileage: number;
  lastMaintenanceDate?: Date;
  lastMaintenanceMileage?: number;
  fuelLevel?: number;
  status: UnitStatus;
}
