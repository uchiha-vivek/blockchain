/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUserDto";
import mongoose from "mongoose";
import { UpdateUserDto } from "./dto/UpdateUserDto";
// controllers created for performing basic crud operations
@Controller('users')
export class UserController {
    // buiseness logic
    constructor(private userService: UserService) {}
    // creating new User
    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto)
        return this.userService.createUser(createUserDto)
    }
    // updation of user details
    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        // optimization on id --> for simplicity purpose
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new HttpException("User does not exist", 404)
        const updateUser = await this.userService.updateUser(id, updateUserDto)
        if (!updateUser) throw new HttpException("User dont exist", 404)
        return this.userService.updateUser(id, updateUserDto)
    }
    // getting user details by id
    @Get(':id')
    async getUserByID(@Param('id') id: string) {
        // optimization on id --> for simplicity purpose
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new HttpException("User does not exist", 404)
        const findUserID = await this.userService.getUserByID(id)
        // if that user dont exist
        if (!findUserID) throw new HttpException("User does not exits", 404)
        return findUserID
    }
    // deleting user by id
    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new HttpException("User does not exist", 404)
        const deletedUser = await this.userService.deleteUser(id);
        console.log(deletedUser)
    }
    // getting all the users
    @Get()
    getUsers() {
        return this.userService.getUsers()
    }

}