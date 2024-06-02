/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString } from "class-validator";
// creating dto for updating user
export class UpdateUserDto {

   @IsNotEmpty()
   @IsString()
   userName: string;

}