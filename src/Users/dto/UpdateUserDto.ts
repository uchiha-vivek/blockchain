/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString } from "class-validator";


export class UpdateUserDto {

   @IsNotEmpty()
   @IsString()
   userName:string;

}