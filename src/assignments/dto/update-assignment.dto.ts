import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { UnitStatus } from '@prisma/client';

export class UpdateAssignmentDto {
  @IsOptional()
  @IsInt()
  unitId?: number;

  @IsOptional()
  @IsInt()
  userId?: number;

  @IsOptional()
  @IsString()
  destination?: string;

  @IsOptional()
  @IsInt()
  currentMileage?: number;

  @IsOptional()
  @IsInt()
  fuelLevel?: number;

  @IsOptional()
  @IsString()
  startDate?: Date;

  @IsOptional()
  @IsString()
  endDate?: Date;
}
