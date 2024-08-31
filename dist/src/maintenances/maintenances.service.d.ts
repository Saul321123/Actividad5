import { PrismaService } from 'prisma/prisma.service';
import { CreateMaintenanceDto } from './dto/create.maintenances.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenances.dto';
import { UnitsService } from '../units/units.service';
export declare class MaintenancesService {
    private readonly prisma;
    private readonly unitsService;
    constructor(prisma: PrismaService, unitsService: UnitsService);
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
    findOne(id: number): Promise<{
        id: number;
        unitId: number;
        maintenanceType: string;
        date: Date;
        diagnosis: string;
        description: string;
        cost: number;
    }>;
    update(id: number, updateMaintenanceDto: UpdateMaintenanceDto): Promise<{
        id: number;
        unitId: number;
        maintenanceType: string;
        date: Date;
        diagnosis: string;
        description: string;
        cost: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        unitId: number;
        maintenanceType: string;
        date: Date;
        diagnosis: string;
        description: string;
        cost: number;
    }>;
}
