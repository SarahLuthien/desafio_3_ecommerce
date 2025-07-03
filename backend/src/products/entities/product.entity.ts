import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Type } from 'class-transformer';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
@Entity()
export class Product {
  @Expose({ groups: ['summary', 'detail'] })
  @PrimaryGeneratedColumn()
  id: number;

  @Expose({ groups: ['detail'] })
  @Column({ unique: true, nullable: true })
  sku: string;

  @Expose({ groups: ['summary', 'detail'] })
  @Column()
  name: string;

  @Expose({ groups: ['summary', 'detail'] })
  @Column('text', { nullable: true })
  short_description: string;

  @Expose({ groups: ['detail'] })
  @Column('text', { nullable: true })
  description: string;

  @Expose({ groups: ['detail'] })
  @Column('text', { nullable: true })
  additional_information: string;

  @Expose({ groups: ['summary', 'detail'] })
  @Column('decimal')
  @Type(() => Number)
  price: number;

  @Expose({ groups: ['summary', 'detail'] })
  @Column('text', { array: true, nullable: true })
  imageUrls: string[];

  @Expose({ groups: ['summary', 'detail'] })
  @Column({ nullable: true })
  category: string;

  @Expose({ groups: ['summary', 'detail'] })
  @Column({ default: false })
  is_new: boolean;

  @Expose({ groups: ['summary', 'detail'] })
  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  @Type(() => Number)
  discount_percentage: number;

  @Expose({ groups: ['detail'] })
  @Column('text', { array: true, nullable: true })
  tags: string[];

  @Expose({ groups: ['detail'] })
  @Column('text', { array: true, nullable: true })
  colors: string[];

  @Expose({ groups: ['detail'] })
  @Column('text', { array: true, nullable: true })
  sizes: string[];

  @Expose({ groups: ['summary', 'detail'] })
  @Column('decimal', { precision: 2, scale: 1, default: 0 })
  @Type(() => Number)
  rating: number;

  @Expose({ groups: ['detail'] })
  @Column({ default: 0 })
  review_count: number;
}
