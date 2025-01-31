import { Request } from "express";

export interface IUser {
  username: string;
  email: string;
}

export interface CustomRequestMaster extends Request {
  user?: IUser;
}
