import { PrismaService } from 'prisma/prisma.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { UnitsService } from '../units/units.service';
export declare class AssignmentsService {
    private readonly prisma;
    private readonly unitsService;
    constructor(prisma: PrismaService, unitsService: UnitsService);
    create(createAssignmentDto: CreateAssignmentDto): Promise<{
        id: number;
        unitId: number;
        userId: number;
        destination: string;
        currentMileage: number;
        fuelLevel: number;
        startDate: Date;
        endDate: Date | null;
    }>;
    findAll(): Promise<{
        id: number;
        unitId: number;
        userId: number;
        destination: string;
        currentMileage: number;
        fuelLevel: number;
        startDate: Date;
        endDate: Date | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        unitId: number;
        userId: number;
        destination: string;
        currentMileage: number;
        fuelLevel: number;
        startDate: Date;
        endDate: Date | null;
    }>;
    update(id: number, updateAssignmentDto: UpdateAssignmentDto): Promise<{
        id: number;
        unitId: number;
        userId: number;
        destination: string;
        currentMileage: number;
        fuelLevel: number;
        startDate: Date;
        endDate: Date | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        unitId: number;
        userId: number;
        destination: string;
        currentMileage: number;
        fuelLevel: number;
        startDate: Date;
        endDate: Date | null;
    }>;
}
