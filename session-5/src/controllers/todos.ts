import { NextFunction, Request, Response } from "express";
import { Todo } from "../../types/todo";
import TodoModel from '../models/todos';

export function getTodos (req: Request, res: Response, next: NextFunction ) {
 // TODO
}

export async function addNewTodo (req: Request, res: Response, next: NextFunction ) {

    try {
        const todo: any = req.body;

        const validatedTodo: Omit<Todo, 'id'> = validateTodo(todo);

        await TodoModel.addNewTodo(validatedTodo);

        return res.status(201).json({success: true});
    } catch (e) {
        next(e);
    }
}

function validateTodo(todo: any): Omit<Todo, 'id'> {
    const { text, isDone, addedAt, doneAt} = todo;

    return { text, isDone, addedAt, doneAt };
}