import { printTimestamp } from "@/middlewares/printTimestamp";
import { Request, Response } from "express";

export const get = [
  printTimestamp,
  (req: Request, res: Response) => {
    const users = [
      { id: 1, name: "Name1" },
      { id: 2, name: "Name2" },
    ];

    res.status(200).json(users);
  },
];

export const post = [
  printTimestamp,
  (req: Request, res: Response) => {
    const newUser = {
      id: Date.now(),
      name: req.body.name,
    };
    res.status(201).json(newUser);
  },
];
