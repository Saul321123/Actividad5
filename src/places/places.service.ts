import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Injectable()
export class PlacesService {
  constructor(private prisma: PrismaService) {}

  async create(createPlaceDto: CreatePlaceDto) {
    return this.prisma.place.create({
      data: createPlaceDto,
    });
  }

  async findAll() {
    return this.prisma.place.findMany();
  }

  async findOne(id: number) {
    return this.prisma.place.findUnique({
      where: { id },
    });
  }

  async update(id: number, updatePlaceDto: UpdatePlaceDto) {
    try {
      return await this.prisma.place.update({
        where: { id },
        data: updatePlaceDto,
      });
    } catch (error) {
      console.error('Error updating place:', error);
      throw new Error('Unable to update place');
    }
  }
  

  async remove(id: number) {
    return this.prisma.place.delete({
      where: { id },
    });
  }
}
