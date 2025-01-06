/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ) {}
  
  @Get()
  getAllProducts() {
    return this.productsService.findAll();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    const newId= parseInt(id);
    const productById = this.productsService.finOneById(newId);
    if (!productById) {
      return { message: 'Product not found' };
    }
    return productById;
  }
}
