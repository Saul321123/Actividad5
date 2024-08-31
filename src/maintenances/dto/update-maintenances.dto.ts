import { IsInt, IsOptional, IsString, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateMaintenanceDto {
  @IsOptional()
  @IsInt()
  unitId?: number;

  @IsOptional()
  @IsString()
  maintenanceType?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date) 
  date?: Date;

  @IsOptional()
  @IsString()
  diagnosis?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  cost?: number;
}

