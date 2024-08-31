import { MaintenancesService } from './maintenances.service';
import { CreateMaintenanceDto } from './dto/create.maintenances.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenances.dto';
export declare class MaintenancesController {
    private readonly maintenancesService;
    constructor(maintenancesService: MaintenancesService);
    create(createMaintenanceDto: CreateMaintenanceDto): Promise<{
        id: number;
        unitId: number;
        maintenanceType: string;
        date: Date;
        diagnosis: string;
        description: string;
        cost: number;
    }>;
    findAll(): Promise<{
        id: number;
        unitId: number;
        maintenanceType: string;
        date: Date;
        diagnosis: string;
        description: string;
        cost: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        unitId: number;
        maintenanceType: string;
        date: Date;
        diagnosis: string;
        description: string;
        cost: number;
    }>;
    update(id: string, updateMaintenanceDto: UpdateMaintenanceDto): Promise<{
        id: number;
        unitId: number;
        maintenanceType: string;
        date: Date;
        diagnosis: string;
        description: string;
        cost: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        unitId: number;
        maintenanceType: string;
        date: Date;
        diagnosis: string;
        description: string;
        cost: number;
    }>;
}
