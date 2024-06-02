/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({ timestamps: true })
// Basic schema created for wallet details
// More features can further be incorporated
export class Wallet {

     @Prop({ required: true, unique: true })
     userID: string
     @Prop({ required: true, default: 0 })
     balance: number
     @Prop({ required: true, default: 'active' })
     status: string
     @Prop({ required: true, unique: true })
     address: string
     @Prop({ required: true, unique: true })
     cryptonum: number

}


export const WalletSchema = SchemaFactory.createForClass(Wallet)
