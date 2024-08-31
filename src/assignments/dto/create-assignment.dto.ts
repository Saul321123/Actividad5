import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { UnitStatus } from '@prisma/client';

export class CreateAssignmentDto {
  @IsInt()
  unitId: number;

  @IsInt()
  userId: number;

  @IsString()
  destination: string;

  @IsInt()
  currentMileage: number;

  @IsInt()
  fuelLevel: number;

  @IsString()
  startDate: Date;

  @IsOptional()
  @IsString()
  endDate?: Date;
}
