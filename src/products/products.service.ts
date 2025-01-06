/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Description 1',
            price: 100,
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description 2',
            price: 200,
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Description 3',
            price: 300,
        }
    ]

    findAll() {
        return this.products;
    }

    finOneById(id: number) {
        const product= this.products.find((product) => product.id === id);
        return product;
    }
}
