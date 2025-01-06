/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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
    console.log({id});
    return this.productsService.finOneById(id);
  }

  @Post()
  createProduct(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  updateProduct(
    @Param('id',ParseIntPipe) id: number,
    @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteProduct(@Param('id',ParseIntPipe) id: number) {
    return `Product with ID ${id} has been deleted`;
  }
}
