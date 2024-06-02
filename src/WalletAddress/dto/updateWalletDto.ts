/* eslint-disable prettier/prettier */

import { IsAlphanumeric, IsNotEmpty, IsNumber } from "class-validator"
// dto for updating wallet credentials
export class UpdateWalletDto {


    @IsNotEmpty()
    @IsNumber()
    balance: number
    @IsNotEmpty()
    @IsAlphanumeric()
    address: string
}