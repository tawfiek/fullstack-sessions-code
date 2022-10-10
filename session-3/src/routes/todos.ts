import { Router } from "express";
import {
  addTodo,
  getTodos,
  getTodoById,
  editTodo,
  deleteTodo,
} from "../controllers/todos";
import logger from "../middlewares/logger";

const router = Router();
router.use(logger);
router.get("/", getTodos);
router.get("/:id", getTodoById);
router.put("/:id", editTodo);
router.post("/", addTodo);
router.delete("/:id", deleteTodo);

export default router;
