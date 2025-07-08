import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { NotFoundException } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';

interface FindAllOptions {
  limit?: number;
  page?: number;
}

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.preload({
      id: id,
      ...updateProductDto,
    });
    if (!product) {
      // Lança um erro se o produto não for encontrado
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    // Salva as alterações no banco de dados
    return this.productsRepository.save(product);
  }

  // Salva um novo produto no banco de dados
  create(createProductDto: CreateProductDto) {
    const newProduct = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(newProduct);
  }

  // Busca todos os produtos do banco de dados com filtro por categoria
  async findAll(options: { limit?: number; page?: number; category?: string }) {
    const { limit = 16, page = 1, category } = options;
    const skip = (page - 1) * limit;

    const whereCondition = category ? { category: category } : {};

    return this.productsRepository.find({
      where: whereCondition,
      order: { id: 'ASC' },
      take: limit,
      skip: skip,
    });
  }

  // Busca o produto pelo seu único ID
  findOne(id: number) {
    return this.productsRepository.findOneBy({ id: id });
  }
}
