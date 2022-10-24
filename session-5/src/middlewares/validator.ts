import { NextFunction, Request, Response } from "express";
import { Todo } from "../../types/todo";

export function addTodoValidator (req: Request, res: Response, next: NextFunction) {
    const todo: Todo = req.body;

    if (!todo.text) {
        return res.status(400).json({ message: 'Text is required!' });
    }

    if (todo.text.length < 5) {
        return res.status(400).json({ message: 'Text is too short!' });
    }

    if (todo.text.length > 200) {
        return res.status(400).json({ message: 'Text is too long!' });
    }

    next();
}