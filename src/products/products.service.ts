/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import {  } from 'uuid';
@Injectable()
export class ProductsService {
    private products: Product[] = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Description 1',
            price: 100,
            quantity: 10,
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description 2',
            price: 200,
            quantity: 20,
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Description 3',
            price: 300,
            quantity: 30,
        }
    ]

    findAll() {
        return this.products;
    }

    finOneById(id: number) {
        const product= this.products.find((product) => product.id === id);
        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }
}
