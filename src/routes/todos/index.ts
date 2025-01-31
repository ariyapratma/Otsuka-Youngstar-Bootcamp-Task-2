import { printTimestampCollage } from "@/middlewares/printTimestampCollage";
import { Request, Response } from "express";
import { main_db } from "@/lib/db";
import { CustomRequestCollage } from "@/types/todos";

export const get = [
  // printTimestampCollage,
  async (req: CustomRequestCollage, res: Response) => {
    const todos = await main_db.tr_todo.findMany({
      where: {
        deleted_at: {
          not: null,
        },
      },
    });
    res.status(200).json({
      status: true,
      data: todos,
    });
  },
];

export const post = [
  printTimestampCollage,
  async (req: CustomRequestCollage, res: Response) => {
    try {
      const { title, category_id, description, progress = 0 } = req.body;
      const created_by = req.user.username;
      const todo = await main_db.tr_todo.create({
        data: {
          title: title,
          category_id: category_id,
          description: description,
          progress: progress,
          created_by: created_by,
        },
      });
      res.status(201).json({
        status: true,
        data: todo,
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to add todo", error });
    }
  },
];
