/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { Wallet } from "./schemas/walletAddress.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { WalletDto } from "./dto/walletDto";
import { UpdateWalletDto } from "./dto/updateWalletDto";

@Injectable()

export class WalletService {
    constructor(
        @InjectModel(Wallet.name) private walletModel:Model<Wallet>
    ){

    }

    createWallet(walletDto:WalletDto){
       const newWallet = new this.walletModel(walletDto)
       return newWallet.save()
    }
    
    // getting the wallet details by id
    getWalletByID(id:string){
        return this.walletModel.findById(id);
    }

    // updating wallet details
    updateWallet(id:string,updateWalletDto:UpdateWalletDto){
        return this.walletModel.findByIdAndUpdate(id,updateWalletDto,{new:true})
    }

    // delete the wallet details
    deleteWallet(id:string){
        return this.walletModel.findByIdAndDelete(id)
    }

}