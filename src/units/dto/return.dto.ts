import { ApiProperty } from '@nestjs/swagger';

export class ReturnDto {
  @ApiProperty({ description: 'Current mileage of the unit' })
  mileage: number;

  @ApiProperty({ description: 'Current fuel level of the unit' })
  fuelLevel: number;
}
