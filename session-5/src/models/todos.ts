import Pool from "../configs/db";
import { Todo } from "../../types/todo";

export default class TodoModel {

    static async addNewTodo (todo: Omit<Todo, 'id'>): Promise<any> {
        try {
            const connection = await Pool.connect(); // It might throw error
            const query = `INSERT INTO todos (text, is_done, added_at, done_at) VALUES ($1, $2, $3, $4)`;
            const params = [todo.text, todo.isDone, todo.addedAt, todo.doneAt];

            const result = await connection.query(query, params); // It might throw an error

            return result.rows;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}

/**
 *
 *

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS toDos;

CREATE TABLE users(
   user_id INT GENERATED ALWAYS AS IDENTITY,
   user_name VARCHAR(255) NOT NULL,
   PRIMARY KEY(user_id)
);

CREATE TABLE toDos(
   toDo_id INT GENERATED ALWAYS AS IDENTITY,
   user_id INT,
   toDo_name VARCHAR(255) NOT NULL,
   created_at timestamp NOT NULL DEFAULT NOW(),
   done_at timestamp default NULL,
   PRIMARY KEY(todo_id),
   CONSTRAINT fk_toDos
      FOREIGN KEY(user_id)
	  REFERENCES users(user_id)
);
 */