import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id: string;
    @IsString()
    @IsOptional()
    readonly name?: string;
    @IsString()
    @IsOptional()
    readonly email?: string;
    @IsString()
    @IsOptional()
    readonly password?: string;
    @IsOptional()
    @IsBoolean()
    readonly status?: boolean;
    @IsOptional()
    readonly createdAt?: Date;
}
