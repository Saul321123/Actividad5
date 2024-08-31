import { UnitsService } from './units.service';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { ReturnDto } from './dto/return.dto';
export declare class UnitsController {
    private readonly unitsService;
    constructor(unitsService: UnitsService);
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
    findOne(id: string): Promise<any>;
    update(id: string, updateUnitDto: UpdateUnitDto): Promise<{
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
    registerReturn(id: string, returnDto: ReturnDto): Promise<{
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
    remove(id: string): Promise<{
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
}
