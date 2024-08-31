import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { ApiTags} from '@nestjs/swagger';

@ApiTags('places')
@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  async create(@Body() createPlaceDto: CreatePlaceDto) {
    return this.placesService.create(createPlaceDto);
  }

  @Get()
  async findAll() {
    return this.placesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.placesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatePlaceDto: UpdatePlaceDto) {
    return this.placesService.update(id, updatePlaceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.placesService.remove(id);
  }
}

