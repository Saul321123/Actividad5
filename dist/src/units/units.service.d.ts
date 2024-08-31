import { PrismaService } from 'prisma/prisma.service';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
export declare class UnitsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUnitDto: CreateUnitDto): Promise<{
        id: number;
        brand: string;
        model: string;
        type: string;
        color: string;
        licensePlate: string;
        currentMileage: number;
        lastMaintenanceDate: Date | null;
        lastMaintenanceMileage: number | null;
        fuelLevel: number | null;
        status: import(".prisma/client").$Enums.UnitStatus;
    }>;
    findAll(): Promise<any[]>;
    private checkMaintenanceAlert;
    findOne(id: number): Promise<any>;
    update(id: number, updateUnitDto: UpdateUnitDto): Promise<{
        id: number;
        brand: string;
        model: string;
        type: string;
        color: string;
        licensePlate: string;
        currentMileage: number;
        lastMaintenanceDate: Date | null;
        lastMaintenanceMileage: number | null;
        fuelLevel: number | null;
        status: import(".prisma/client").$Enums.UnitStatus;
    }>;
    remove(id: number): Promise<{
        id: number;
        brand: string;
        model: string;
        type: string;
        color: string;
        licensePlate: string;
        currentMileage: number;
        lastMaintenanceDate: Date | null;
        lastMaintenanceMileage: number | null;
        fuelLevel: number | null;
        status: import(".prisma/client").$Enums.UnitStatus;
    }>;
    sendUnitToMaintenance(unitId: number): Promise<{
        id: number;
        brand: string;
        model: string;
        type: string;
        color: string;
        licensePlate: string;
        currentMileage: number;
        lastMaintenanceDate: Date | null;
        lastMaintenanceMileage: number | null;
        fuelLevel: number | null;
        status: import(".prisma/client").$Enums.UnitStatus;
    }>;
    findUnitsNotReturned(): Promise<{
        id: number;
        brand: string;
        model: string;
        type: string;
        color: string;
        licensePlate: string;
        currentMileage: number;
        lastMaintenanceDate: Date | null;
        lastMaintenanceMileage: number | null;
        fuelLevel: number | null;
        status: import(".prisma/client").$Enums.UnitStatus;
    }[]>;
    registerReturn(unitId: number, mileage: number, fuelLevel: number): Promise<{
        unit: {
            id: number;
            brand: string;
            model: string;
            type: string;
            color: string;
            licensePlate: string;
            currentMileage: number;
            lastMaintenanceDate: Date | null;
            lastMaintenanceMileage: number | null;
            fuelLevel: number | null;
            status: import(".prisma/client").$Enums.UnitStatus;
        };
        maintenanceAlert: string;
    }>;
    private checkMaintenanceAlertOnReturn;
}
