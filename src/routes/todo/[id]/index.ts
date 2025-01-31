import { main_db } from "@/lib/db";
import { Request, Response } from "express";
import { printTimestamp } from "@/middlewares/printTimestamp";

// Get By ID Only
export const get = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    // Validasi ID harus angka
    if (isNaN(id)) {
      return res.status(400).json({
        status: false,
        message: "Invalid ID format",
      });
    }

    // Cari data berdasarkan ID
    const todo = await main_db.mst_todo_category.findUnique({
      where: {
        id: id,
        deleted_at: null, // Hanya ambil data yang belum dihapus (soft delete)
      },
    });

    // Jika tidak ditemukan
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

// ✅ Update Category (PUT)
export const put = [
  printTimestamp, // Middleware untuk mencetak timestamp request
  async (req: Request, res: Response) => {
    try {
      const { category } = req.body;
      const id = parseInt(req.params.id);

      // Cetak Authorization Header
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

// ✅ Soft Delete (DELETE)
export const del = [
  printTimestamp, // Middleware untuk mencetak timestamp request
  async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);

      // Cetak Authorization Header
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

      return res.status(204).send(); // 204 No Content
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
];