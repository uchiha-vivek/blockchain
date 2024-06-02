/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/User.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/createUserDto";
import { UpdateUserDto } from "./dto/UpdateUserDto";



@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel:Model<User>
    ){

    }
    createUser(createUserDto:CreateUserDto){
        // saving
        const newUser = new this.userModel(createUserDto);
        return newUser.save()
        }
        // fetching all the users
        getUsers(){
            return this.userModel.find()
        }
        // fetch user by specific id
        getUserByID(id:string){
            return this.userModel.findById(id);
        }
        // update user
        updateUser(id:string , updateUserDto:UpdateUserDto){
           return this.userModel.findByIdAndUpdate(id,updateUserDto,{new:true})
        }
        // delete User
        deleteUser(id:string){
            return this.userModel.findByIdAndDelete(id)
        }
}