import { Request } from "express";

export interface IUser {
  username: string;
  email: string;
}

export interface CustomRequestCollage extends Request {
  user?: IUser;
}
