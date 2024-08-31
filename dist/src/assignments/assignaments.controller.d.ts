import { AssignmentsService } from './assignments.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
export declare class AssignmentsController {
    private readonly assignmentsService;
    constructor(assignmentsService: AssignmentsService);
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
    findOne(id: string): Promise<{
        id: number;
        unitId: number;
        userId: number;
        destination: string;
        currentMileage: number;
        fuelLevel: number;
        startDate: Date;
        endDate: Date | null;
    }>;
    update(id: string, updateAssignmentDto: UpdateAssignmentDto): Promise<{
        id: number;
        unitId: number;
        userId: number;
        destination: string;
        currentMileage: number;
        fuelLevel: number;
        startDate: Date;
        endDate: Date | null;
    }>;
    remove(id: string): Promise<{
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
