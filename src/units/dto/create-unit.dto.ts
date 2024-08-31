import { IsEnum, IsInt, IsOptional, IsString, IsDateString, Min } from 'class-validator';
import { UnitStatus } from '@prisma/client';

export class CreateUnitDto {
  @IsString()
  brand: string;

  @IsString()
  model: string;

  @IsString()
  type: string;

  @IsString()
  color: string;

  @IsString()
  licensePlate: string;

  @IsInt()
  @Min(0)
  currentMileage: number;

  @IsOptional()
  @IsDateString()
  lastMaintenanceDate?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  lastMaintenanceMileage?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  fuelLevel?: number;

  @IsEnum(UnitStatus)
  status: UnitStatus;
}



