import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MaintenancesService } from './maintenances.service';
import { CreateMaintenanceDto } from './dto/create.maintenances.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenances.dto'
import { ApiTags} from '@nestjs/swagger';

@ApiTags('maintenances')

@Controller('maintenances')
export class MaintenancesController {
  constructor(private readonly maintenancesService: MaintenancesService) {}

  @Post()
  create(@Body() createMaintenanceDto: CreateMaintenanceDto) {
    return this.maintenancesService.create(createMaintenanceDto);
  }

  @Get()
  findAll() {
    return this.maintenancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maintenancesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMaintenanceDto: UpdateMaintenanceDto) {
    return this.maintenancesService.update(+id, updateMaintenanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.maintenancesService.remove(+id);
  }
}
