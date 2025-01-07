import { IsPositive, IsString, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  readonly name: string;
  @IsString()
  readonly description: string;
  @IsPositive()
  readonly price: number;
  @IsPositive()
  readonly quantity: number;
}
