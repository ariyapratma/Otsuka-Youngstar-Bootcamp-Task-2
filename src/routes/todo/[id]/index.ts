import { main_db } from "@/lib/db";
import { Request, Response } from "express";
import { printTimestamp } from "@/middlewares/printTimestamp";

export const get = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        status: false,
        message: "Invalid ID format",
      });
    }

    const todo = await main_db.mst_todo_category.findUnique({
      where: {
        id: id,
        deleted_at: null,
      },
    });

    if (!todo) {
      return res.status(404).json({
        status: false,
        message: "Todo category not found",
      });
    }

    return res.status(200).json({
      status: true,
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const put = [
  printTimestamp,
  async (req: Request, res: Response) => {
    try {
      const { category } = req.body;
      const id = parseInt(req.params.id);
      console.log("Authorization Header:", req.headers["authorization"]);

      if (isNaN(id)) {
        return res.status(400).json({
          status: false,
          message: "Invalid ID format",
        });
      }

      const isExist = await main_db.mst_todo_category.findUnique({
        where: {
          id: id,
          deleted_at: null,
        },
      });

      if (!isExist) {
        return res.status(404).json({
          status: false,
          message: "Item not found or already deleted",
        });
      }

      const updatedTodo = await main_db.mst_todo_category.update({
        where: {
          id: id,
        },
        data: {
          category: category,
        },
      });

      return res.status(200).json({
        status: true,
        data: updatedTodo,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
];

export const del = [
  printTimestamp,
  async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      console.log("Authorization Header:", req.headers["authorization"]);

      if (isNaN(id)) {
        return res.status(400).json({
          status: false,
          message: "Invalid ID format",
        });
      }

      const isExist = await main_db.mst_todo_category.findUnique({
        where: {
          id: id,
          deleted_at: null,
        },
      });

      if (!isExist) {
        return res.status(404).json({
          status: false,
          message: "Item not found or already deleted",
        });
      }

      await main_db.mst_todo_category.update({
        where: {
          id: id,
        },
        data: {
          deleted_at: new Date(),
        },
      });

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
];
