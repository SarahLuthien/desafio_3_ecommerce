import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  ClassSerializerInterceptor,
  SerializeOptions,
  Query,
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
  findAll(
    @Query('limit') limit?: number,
    @Query('page') page?: number,
    @Query('category') category?: string,
    @Query('isNew') isNew?: boolean,
    @Query('hasDiscount') hasDiscount?: boolean,
    @Query('sortBy') sortBy?: string,
  ) {
    return this.productsService.findAll({
      limit,
      page,
      category,
      isNew,
      hasDiscount,
      sortBy,
    });
  }

  @Get(':id')
  @SerializeOptions({ groups: ['detail'] })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }
}
