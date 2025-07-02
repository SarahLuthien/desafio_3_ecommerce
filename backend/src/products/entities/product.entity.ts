import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Type } from 'class-transformer';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true })
  sku: string;

  @Column()
  name: string;

  @Column('text', { nullable: true })
  short_description: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('text', { nullable: true })
  additional_information: string;

  @Column('decimal')
  @Type(() => Number)
  price: number;

  @Column('text', { array: true, nullable: true })
  imageUrls: string[];

  @Column({ nullable: true })
  category: string;

  @Column({ default: false })
  is_new: boolean;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  @Type(() => Number)
  discount_percentage: number;

  @Column('text', { array: true, nullable: true })
  tags: string[];

  @Column('text', { array: true, nullable: true })
  colors: string[];

  @Column('text', { array: true, nullable: true })
  sizes: string[];

  @Column('decimal', { precision: 2, scale: 1, default: 0 })
  @Type(() => Number)
  rating: number;

  @Column({ default: 0 })
  review_count: number;
}
