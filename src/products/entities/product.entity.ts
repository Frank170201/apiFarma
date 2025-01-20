import { number } from "joi";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
    })
    name: string;

    @Column({
        type: 'varchar',
        nullable: true
    })
    description: string;

    @Column({
        type: 'float',
        default: 0
    })
    unit_price: number;

    @Column({
        type: 'varchar'
    })
    unit_measurement: string;

    @Column({
        type: 'boolean',
    })
    status: boolean;

    @Column({
        type: 'varchar',
    })
    category: string;

    @Column({
        type: 'varchar',
    })
    brand: string;

}
