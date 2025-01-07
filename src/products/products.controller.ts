/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';


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
  getProductById(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.finOneById(id);
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Patch(':id')
  updateProduct(
    @Param('id',ParseUUIDPipe) id: string,
    @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  deleteProduct(@Param('id',ParseUUIDPipe) id: string) {
    return this.productsService.delete(id);
  }
}
