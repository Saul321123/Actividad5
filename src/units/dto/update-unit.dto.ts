import { IsEnum, IsInt, IsOptional, IsString, IsDateString, Min } from 'class-validator';
import { UnitStatus } from '@prisma/client';

export class UpdateUnitDto {
  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  model?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsString()
  licensePlate?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  currentMileage?: number;

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

  @IsOptional()
  @IsEnum(UnitStatus)
  status?: UnitStatus;
}

