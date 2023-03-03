import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExamplesService } from './examples.service';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ExampleEntity } from './entities/example.entity';

@Controller('examples')
@ApiTags('examples')
export class ExamplesController {
  constructor(private readonly examplesService: ExamplesService) {}

  @Post()
  @ApiCreatedResponse({ type: ExampleEntity })
  create(@Body() createExampleDto: CreateExampleDto) {
    return this.examplesService.create(createExampleDto);
  }

  @Get()
  @ApiOkResponse({ type: ExampleEntity, isArray: true })
  findAll() {
    return this.examplesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ExampleEntity })
  findOne(@Param('id') id: string) {
    return this.examplesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ExampleEntity })
  update(@Param('id') id: string, @Body() updateExampleDto: UpdateExampleDto) {
    return this.examplesService.update(id, updateExampleDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ExampleEntity })
  remove(@Param('id') id: string) {
    return this.examplesService.remove(id);
  }
}
