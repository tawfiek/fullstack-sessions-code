import { NextFunction, Response, Request } from 'express';
import {Todo} from '../../types/todo';

const todos: Todo[] = [
    {
        id:"1", 
        text:"Code frontend", 
        isDone:false, 
        addedAt: new Date(), 
        doneAt:null
    },
]

export const getAllTodos = (req:Request, res:Response, next:NextFunction) => {
    try {
      res.send(todos);
    } catch (error) {
      console.log("server error", error);
      res.json({ error: "Server Error" });
    }
  };
  
  export const getTodoById =  (req:Request, res:Response, next:NextFunction)  => {
    try {
      const id = req.params.id;
      var newArray = todos.filter( (el) => el.id == id);
      if( newArray.length!=0)
      res.send(newArray[0]);
      else res.send("Id not found");

    } catch (error) {
      console.log("server error", error);
      res.json({ error: "Server Error" });
    }
};

export const updateTodoById =  (req:Request, res:Response, next:NextFunction)  => {
    try {
     const id = req.params.id;
     const pos = todos.map(e => e.id).indexOf(id);

     if( pos!=-1){//found the todo id
        console.log("found the todo id: ", id);
        
        todos[pos] =(req.body.newTodo as unknown) as Todo;
        res.sendStatus(200)
     }

     
     else res.send("Id not found");  

    } catch (error) {
      console.log("server error", error);
      res.json({ error: "Server Error" });
    }
};

export const addToDO =  (req:Request, res:Response, next:NextFunction)  => {
    try {
    const toDo = req.body.todo;
    todos.push(toDo);
    console.log(toDo);
    res.send(toDo);
    

    } catch (error) {
      console.log("server error", error);
      res.json({ error: "Server Error" });
    }
};
export const deleteTodoById = (req:Request, res:Response, next:NextFunction)  => {
    try {
      const id = req.params.id;
      console.log(id);
      
      const pos = todos.map(e => e.id).indexOf(id);

      if( pos!=-1){//found the todo id
        todos.splice(pos, 1); // 2nd parameter means remove one item only
        res.sendStatus(200)
      }
 
      
      else res.send("Id not found");  

  

    } catch (error) {
      console.log("server error", error);
      res.json({ error: "Server Error" });
    }
};
  