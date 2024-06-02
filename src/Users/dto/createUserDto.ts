/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty,   IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    

     @IsNotEmpty()
     @IsString()
     userName:string;

     @IsNotEmpty()
     @IsString()
     firstName:string;

     @IsNotEmpty()
     @IsString()
     secondName:string;
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsStrongPassword()
    password:string;


}