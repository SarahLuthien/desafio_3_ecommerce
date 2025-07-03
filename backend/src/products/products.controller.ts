import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  ClassSerializerInterceptor,
  SerializeOptions,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Patch } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
@UseInterceptors(ClassSerializerInterceptor)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @SerializeOptions({ groups: ['summary'] })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @SerializeOptions({ groups: ['detail'] })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }
}
