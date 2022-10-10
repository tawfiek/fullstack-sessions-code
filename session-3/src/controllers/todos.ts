import {
  getTodosMethod,
  getTodoByIdMethod,
  addTodoMethod,
  editTodoMethod,
  deleteTodoMethod,
} from "./../models/todos";
import { Request, Response } from "express";

export const getTodos = (req: Request, res: Response) => {
  const data = getTodosMethod();
  res.status(200).json({
    data,
  });
};
export const getTodoById = (req: Request, res: Response) => {
  const data = getTodoByIdMethod(req.params.id);

  res.status(200).json({
    data,
  });
};
export const addTodo = (req: Request, res: Response) => {
  addTodoMethod(req.body);
  res.status(201).json({
    data: "Added successfully",
  });
};
export const editTodo = (req: Request, res: Response) => {
  editTodoMethod(req.params.id, req.body);
  res.status(200).json({
    data: "Updated successfully",
  });
};
export const deleteTodo = (req: Request, res: Response) => {
  deleteTodoMethod(req.params.id);
  res.status(200).json({
    data: "Deleted successfully",
  });
};
