const todos : any = {};

export function addTodo (todo: any ): void {
    todos[todo.id] = todo;
}

