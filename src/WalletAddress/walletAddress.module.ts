/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Wallet, WalletSchema } from "./schemas/walletAddress.schema";
import { WalletService } from "./walletAddress.service";
import { WalletController } from "./walletAddress.controller";


@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name:Wallet.name,
                schema:WalletSchema
            }
        ])
    ],providers:[WalletService],
    controllers:[WalletController]
})

export class WalletModule{}