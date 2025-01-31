import { CustomRequestCollage } from "../types/todos";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IUser } from "../types/todos";

export const printTimestampCollage = (
  request: CustomRequestCollage,
  response: Response,
  nextFunction: NextFunction
) => {
  console.log(`Accessing ${request.originalUrl}: ${new Date().toString()}`);

  const authorization = request.headers["authorization"];

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return response.status(401).json({
      message: "Unauthorized",
    });
  }

  const token = authorization.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET || "", (err, decoded) => {
    if (err) {
      return response.status(403).json({
        message: "Forbidden",
      });
    } else {
      const user = decoded as IUser;
      request.user = user;
      nextFunction();
    }
  });
};
