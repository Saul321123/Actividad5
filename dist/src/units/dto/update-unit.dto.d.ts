import { UnitStatus } from '@prisma/client';
export declare class UpdateUnitDto {
    brand?: string;
    model?: string;
    type?: string;
    color?: string;
    licensePlate?: string;
    currentMileage?: number;
    lastMaintenanceDate?: string;
    lastMaintenanceMileage?: number;
    fuelLevel?: number;
    status?: UnitStatus;
}
