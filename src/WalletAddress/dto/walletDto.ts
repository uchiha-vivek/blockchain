/* eslint-disable prettier/prettier */

import { IsAlphanumeric, IsBoolean, IsNotEmpty, IsNumber} from "class-validator"

export class WalletDto{


  @IsNotEmpty()
  @IsAlphanumeric()
  userID:string
  
  @IsNotEmpty()
  @IsNumber()
  balance:number
  @IsNotEmpty()
  @IsBoolean()
  status:string
  @IsNotEmpty()
  @IsAlphanumeric()
  address:string
  @IsNotEmpty()
  @IsAlphanumeric()
  cryptonum:string

}

