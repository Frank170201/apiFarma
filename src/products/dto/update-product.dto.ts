/* eslint-disable prettier/prettier */
import { IsOptional, IsPositive, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  readonly name: string;
  @IsString()
  @IsOptional()
  readonly description: string;
  @IsPositive()
  @IsOptional()
  readonly price: number;
  @IsOptional()
  @IsPositive()
  @IsOptional()
  readonly quantity?: number;
}
