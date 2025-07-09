import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository,
  FindOptionsWhere,
  FindOptionsOrder,
  MoreThan,
} from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { NotFoundException } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';

interface FindAllOptions {
  limit?: number;
  page?: number;
  category?: string;
  isNew?: boolean;
  hasDiscount?: boolean;
  sortBy?: string;
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

  async findAll(options: FindAllOptions = {}) {
    const {
      limit = 16,
      page = 1,
      category,
      isNew,
      hasDiscount,
      sortBy,
    } = options;
    const skip = (page - 1) * limit;

    // Condição dos filtros
    const where: FindOptionsWhere<Product> = {};
    if (category) {
      where.category = category;
    }
    if (isNew) {
      where.is_new = true;
    }
    if (hasDiscount) {
      where.discount_percentage = MoreThan(0);
    }

    // Ordenação por preço ascendente e descendente
    const order: FindOptionsOrder<Product> = {};
    if (sortBy === 'price_asc') {
      order.price = 'ASC';
    } else if (sortBy === 'price_desc') {
      order.price = 'DESC';
    } else {
      order.id = 'ASC';
    }

    return this.productsRepository.find({
      where,
      order,
      take: limit,
      skip: skip,
    });
  }

  // Busca o produto pelo seu único ID
  findOne(id: number) {
    return this.productsRepository.findOneBy({ id: id });
  }
}
