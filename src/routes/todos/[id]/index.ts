import { main_db } from "@/lib/db";
import { printTimestampCollage } from "@/middlewares/printTimestampCollage";
import { Request, Response } from "express";
import { CustomRequestCollage } from "@/types/todos";

export const get = [
  async (req: CustomRequestCollage, res: Response) => {
    try {
      const id = parseInt(req.params.id, 10);

      if (isNaN(id)) {
        return res.status(400).json({
          status: false,
          message: "Invalid ID format",
        });
      }

      const todo = await main_db.tr_todo.findFirst({
        where: {
          id,
          deleted_at: null,
        },
      });

      if (!todo) {
        return res.status(404).json({
          status: false,
          message: "Todo not found",
        });
      }

      res.status(200).json({
        status: true,
        data: todo,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
];

export const put = [
  printTimestampCollage,
  async (req: CustomRequestCollage, res: Response) => {
    try {
      const { title, category_id, description, progress = 0 } = req.body;
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        return res.status(400).json({
          status: false,
          message: "Invalid ID",
        });
      }

      const isExist = await main_db.tr_todo.findFirst({
        where: {
          id,
          deleted_at: null,
        },
      });

      if (!isExist) {
        return res.status(404).json({
          status: false,
          message: "Todo not found",
        });
      }

      const updatedTodo = await main_db.tr_todo.update({
        where: { id },
        data: {
          title,
          category_id,
          description,
          progress,
          updated_at: new Date(),
        },
      });

      return res.status(200).json({
        status: true,
        message: "Todo updated successfully",
        data: updatedTodo,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
];

export const del = [
  async (req: CustomRequestCollage, res: Response) => {
    try {
      const id = parseInt(req.params.id, 10);

      if (isNaN(id)) {
        return res.status(400).json({
          status: false,
          message: "Invalid ID",
        });
      }

      const isExist = await main_db.tr_todo.findFirst({
        where: {
          id,
          deleted_at: null,
        },
      });

      if (!isExist) {
        return res.status(404).json({
          status: false,
          message: "Todo not found",
        });
      }

      const deletedTodo = await main_db.tr_todo.update({
        where: { id },
        data: { deleted_at: new Date() },
      });

      return res.status(200).json({
        status: true,
        message: "Todo successfully deleted",
        data: deletedTodo,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
];
