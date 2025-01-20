import { number } from 'joi';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  description: string;

  @Column({
    type: 'float',
    default: 0,
  })
  unit_price: number;

  @Column({
    type: 'varchar',
  })
  unit_measurement: string;

  @Column({
    type: 'boolean',
  })
  status: boolean;

  @Column({
    type: 'varchar',
    unique: true,
  })
  slug: string;

  @Column({
    type: 'varchar',
  })
  category: string;

  @Column({
    type: 'varchar',
  })
  brand: string;

  @BeforeInsert()
  checkSlugInsert() {
    if (!this.slug) {
      this.slug = this.name;
    }

    this.slug = this.slug.toLowerCase().replace(' ', '-').replace("'", '');
  }
}
