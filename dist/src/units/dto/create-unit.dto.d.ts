import { UnitStatus } from '@prisma/client';
export declare class CreateUnitDto {
    brand: string;
    model: string;
    type: string;
    color: string;
    licensePlate: string;
    currentMileage: number;
    lastMaintenanceDate?: string;
    lastMaintenanceMileage?: number;
    fuelLevel?: number;
    status: UnitStatus;
}
