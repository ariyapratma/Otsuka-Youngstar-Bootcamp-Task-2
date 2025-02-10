import { main_db } from "@/lib/db";
import { printTimestamp } from "@/middlewares/printTimestamp";
import { CustomRequest } from "@/types";
import { Request, Response } from "express";

export const get = async (req: Request, res: Response) => {
  try {
    const todos = await main_db.mst_todo_category.findMany({
      where: {
        deleted_at: null,
      },
    });

    res.status(200).json({
      status: true,
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Failed to fetch todo categories",
      error: error.message,
    });
  }
};

export const post = [
  printTimestamp,
  async (req: CustomRequest, res: Response) => {
    try {
      const { category } = req.body;
      if (!category || category.trim() === "") {
        return res.status(400).json({
          status: false,
          message: "Category is required",
        });
      }

      const todo = await main_db.mst_todo_category.create({
        data: {
          category: category,
        },
      });

      res.status(201).json({
        status: true,
        data: todo,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "Failed to create todo category",
        error: error.message,
      });
    }
  },
];
