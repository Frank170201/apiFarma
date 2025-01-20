import { IsArray, IsBoolean, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateProductDto {

    @IsString()
    @MinLength(1)
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsPositive()
    unit_price: number;

    @IsString()
    unit_measurement: string;

    @IsBoolean()
    status: boolean;

    @IsString()
    category: string;

    @IsString()
    brand: string;

    @IsString()
    @IsOptional()
    slug:string;
}
