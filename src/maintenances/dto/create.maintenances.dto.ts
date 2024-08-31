import { IsInt, IsString, IsDate, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMaintenanceDto {
  @IsInt()
  unitId: number;

  @IsString()
  maintenanceType: string;

  @IsDate()
  @Type(() => Date) 
  date: Date;

  @IsString()
  diagnosis: string;

  @IsString()
  description: string;

  @IsNumber()
  cost: number;
}
