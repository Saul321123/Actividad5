import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { UnitsService } from './units.service';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { ReturnDto } from './dto/return.dto';

@ApiTags('units')
@Controller('units')
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear unidad' })
  @ApiResponse({ status: 201, description: 'La unidad ha sido creada exitosamente.' })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta.' })
  create(@Body() createUnitDto: CreateUnitDto) {
    return this.unitsService.create(createUnitDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las unidades' })
  @ApiResponse({ status: 200, description: 'Devuelve todas las unidades.' })
  findAll() {
    return this.unitsService.findAll();
  }

  @Get('not-returned')
  @ApiOperation({ summary: 'Obtener unidades que no han sido retornadas' })
  @ApiResponse({ status: 200, description: 'Devuelve las unidades que no han sido retornadas.' })
  findUnitsNotReturned() {
    return this.unitsService.findUnitsNotReturned();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener unidad por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Devuelve la unidad con el ID especificado.' })
  @ApiResponse({ status: 404, description: 'Unidad no encontrada.' })
  findOne(@Param('id') id: string) {
    return this.unitsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar unidad' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateUnitDto })
  @ApiResponse({ status: 200, description: 'La unidad ha sido actualizada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Unidad no encontrada.' })
  update(@Param('id') id: string, @Body() updateUnitDto: UpdateUnitDto) {
    return this.unitsService.update(+id, updateUnitDto);
  }

  @Put(':id/return')
  @ApiOperation({ summary: 'Registrar retorno de unidad' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: ReturnDto })
  @ApiResponse({ status: 200, description: 'El retorno de la unidad ha sido registrado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Unidad no encontrada.' })
  @ApiResponse({ status: 400, description: 'La unidad no está en estado asignado.' })
  registerReturn(
    @Param('id') id: string,
    @Body() returnDto: ReturnDto
  ) {
    return this.unitsService.registerReturn(+id, returnDto.mileage, returnDto.fuelLevel);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar unidad' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'La unidad ha sido eliminada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Unidad no encontrada.' })
  remove(@Param('id') id: string) {
    return this.unitsService.remove(+id);
  }
}




