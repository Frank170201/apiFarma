import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;

    @Column('varchar')
    description: string;

    @Column('float',{
        default: 0
    })
    unit_price: number;

    @Column('float',{
        default: 0
    })
    unit_measurement: number;

    @Column('boolean',{
        default: true
    })
    status: boolean;

    @Column('varchar')
    category: string;

    @Column('varchar')
    brand: string;

}
