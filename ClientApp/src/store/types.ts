/**
 * How to Build a Todo List App with React Hooks and TypeScript
 * https://blog.alexdevero.com/todo-list-app-react-hooks-typescript/
 *
 * Interfaces
 * The first thing to do is create interfaces for the todo list app.
 * We will use them to define the shape of component props and the todo object (or to type them).
 */

// Todo interface
export interface TodoInterface {
    id: string;
    text: string;
    isCompleted: boolean;
}

// Todo form interface
export interface TodoFormInterface {
    todos: TodoInterface[];  // array of todo objects
    handleTodoCreate: (todo: TodoInterface) => void;
}

// Todo list interface
export interface TodoListInterface {
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTodoRemove: (id: string) => void;
    handleTodoComplete: (id: string) => void;
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    todos: TodoInterface[];  // array of todo objects
}

// Todo item interface
export interface TodoItemInterface {
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTodoRemove: (id: string) => void;
    handleTodoComplete: (id: string) => void;
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    todo: TodoInterface;  // single todo object
}

