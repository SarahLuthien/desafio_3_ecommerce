import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Product } from './products/entities/product.entity';
import { Category } from './categories/entities/category.entity';

// Esta linha carrega o .env que for especificado pelo script
require('dotenv').config({
  path: process.env.DOTENV_CONFIG_PATH || '.env.development',
});

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',

  // Lógica para usar a DATABASE_URL ou variáveis separadas
  url: process.env.DATABASE_URL,
  host: process.env.DATABASE_URL ? undefined : process.env.DB_HOST,
  port: process.env.DATABASE_URL
    ? undefined
    : parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DATABASE_URL ? undefined : process.env.DB_USERNAME,
  password: process.env.DATABASE_URL ? undefined : process.env.DB_PASSWORD,
  database: process.env.DATABASE_URL ? undefined : process.env.DB_NAME,

  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,

  entities: [Product, Category],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
};

const AppDataSource = new DataSource(dataSourceOptions);
export default AppDataSource;
