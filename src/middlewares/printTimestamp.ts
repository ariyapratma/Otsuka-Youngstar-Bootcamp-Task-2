import { CustomRequestMaster } from "@/types/master";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IUser } from "@/types/master";

export const printTimestamp = (
  request: CustomRequestMaster,
  response: Response,
  nextFunction: NextFunction
) => {
  console.log(`Accessing ${request.originalUrl} : ${new Date().toString()}`);

  const authorization = request.headers["authorization"];

  // Perbaiki cara mengambil token dari header
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return response
      .status(401)
      .json({ message: "Unauthorized - Missing or invalid token" });
  }

  const token = authorization.split(" ")[1]; // Ambil token setelah "Bearer"
  console.log("Extracted Token:", token);

  // Verifikasi token JWT
  jwt.verify(token, process.env.JWT_SECRET || "", (err, decoded) => {
    if (err) {
      return response
        .status(403)
        .json({ message: "Forbidden - Invalid token" });
    }

    const user = decoded as IUser;

    // Simpan user ke dalam request untuk digunakan di route lain
    request.user = user;

    nextFunction();
  });
};