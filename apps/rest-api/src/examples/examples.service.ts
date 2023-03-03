import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';

@Injectable()
export class ExamplesService {
  constructor(private prisma: PrismaService) {}

  create(createExampleDto: CreateExampleDto) {
    return this.prisma.example.create({
      data: {
        name: createExampleDto.name,
        published: createExampleDto.published || false,
      },
    });
  }

  findAll() {
    return this.prisma.example.findMany();
  }

  findOne(id: string) {
    return this.prisma.example.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateExampleDto: UpdateExampleDto) {
    return this.prisma.example.update({
      data: updateExampleDto,
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.example.delete({ where: { id } });
  }
}
