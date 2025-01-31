import { main_db } from "@/lib/db";
import { printTimestamp } from "@/middlewares/printTimestamp";
import { CustomRequest } from "@/types";
import { Request, Response } from "express";

//  GET All Categories (findMany)
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

//  POST (Create New Category) with Middleware printTimestamp
export const post = [
  printTimestamp,
  async (req: CustomRequest, res: Response) => {
    try {
      const { category } = req.body;

      // Validasi input category
      if (!category || category.trim() === "") {
        return res.status(400).json({
          status: false,
          message: "Category is required",
        });
      }

      // Buat kategori baru
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
