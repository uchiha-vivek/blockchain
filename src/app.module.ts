/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './Users/user.module';
import { WalletModule } from './WalletAddress/walletAddress.module';
@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://madara_uchiha:madara_uchiha@cluster0.8yubopf.mongodb.net/blockchain"), UserModule, WalletModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
