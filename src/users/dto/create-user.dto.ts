import { IsBoolean, IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(1)
    name: string;
    @IsString()
    @IsEmail()
    email: string;
    @IsString()
    @MinLength(6)
    password: string;
    @IsBoolean()
    status: boolean;
}
