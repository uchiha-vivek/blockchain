/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { WalletService } from "./walletAddress.service";
import { WalletDto } from "./dto/walletDto";
import mongoose from "mongoose";

// Making controllers for Wallet to perform crud  operations
@Controller('wallet')
export class WalletController {
    constructor(private walletService: WalletService) {

    }
    // CRUD --> OPERATIONS
    @Post()
    @UsePipes(new ValidationPipe())
    createWallet(@Body() walletDto: WalletDto) {
        console.log(walletDto)
        return this.walletService.createWallet(walletDto)
    }


    // updating wallet details
    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateWallet(@Param('id') id: string, @Body() walletDto: WalletDto) {
        // optimization on id --> for simplicity purpose
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new HttpException("Wallet does not exist", 404)
        const updateWalletUser = await this.walletService.updateWallet(id, walletDto)
        if (!updateWalletUser) throw new HttpException("Wallet dont exist", 404)
        return this.walletService.updateWallet(id, walletDto)
    }
    // get wallet details by id
    @Get(':id')
    async getWalletByID(@Param('id') id: string) {
        // optimization on id --> for simplicity purpose
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new HttpException("Wallet does not exist", 404)
        const findWalletID = await this.walletService.getWalletByID(id)
        // if that user dont exist
        if (!findWalletID) throw new HttpException("Wallet does not exits", 404)
        return findWalletID
    }
    // delete the wallet details
    @Delete(':id')
    async deleteWallet(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new HttpException("Wallet does not exist", 404)
        const deletedWallet = await this.walletService.deleteWallet(id);
        console.log(deletedWallet)
    }


}