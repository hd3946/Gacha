import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PartService } from './part.service';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';

@Controller('part')
export class PartController {
  constructor(private readonly partService: PartService) {}

  @Post()
  create(@Body() createPartDto: CreatePartDto) {
    return this.partService.create(createPartDto);
  }

  @Get()
  findAll() {
    return this.partService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartDto: UpdatePartDto) {
    return this.partService.update(+id, updatePartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partService.remove(+id);
  }
}
