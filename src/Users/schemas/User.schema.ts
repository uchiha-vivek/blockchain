/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({ timestamps: true })
export class User {

// User Schema includes userName,firstName,secondName,email,password
  @Prop({ unique: true, required: true })
  userName: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  secondName: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ unique: true, required: true })
  password: string;

}

export const UserSchema = SchemaFactory.createForClass(User)
