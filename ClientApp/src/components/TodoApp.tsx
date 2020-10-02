/**
 * How to Build a Todo List App with React Hooks and TypeScript
 * https://blog.alexdevero.com/todo-list-app-react-hooks-typescript/
 *
 * How To Get Started with the MERN Stack
 * https://www.digitalocean.com/community/tutorials/getting-started-with-the-mern-stack
 *
 * React Router Quick Start
 * https://reactrouter.com/web/guides/quick-start
 *
 * This is the main TodoList component.
 * This component will implement methods for creating, updating, removing and completing your todos.
 * This will be done via handleTodoCreate, handleTodoUpdate, handleTodoRemove and handleTodoComplete methods.
 *
 * This is also the component where we will store all existing todos using the useState React hook.
 *
 * Notes:
 *   npm install --save-dev redux-devtools-extension
 *   mongo "mongodb+srv://cc-cluster0.uz5kc.gcp.mongodb.net/sample_airbnb" -u root -p fn8S2EMJCrgKnxsB
 */

// Import dependencies
import * as React from 'react'
import {render} from 'react-dom'  // We will render this component in the DOM.

// Import components
import TodoForm from './TodoForm'
import TodoList from './TodoList'

// Import interfaces
import {TodoInterface} from '../store/types'

// Import styles
import '../styles/style.css'

// TodoApp component
const TodoApp = () => {
    // Creating todo list app state
    // The state for the todo list app will be an array of todo objects (TodoInterface).
    // One object for each todo. We initialize it with an empty array.
    const [todos, setTodos] = React.useState<TodoInterface[]>([])

    // Creating new todo item
    function handleTodoCreate(todo: TodoInterface) {
        // Prepare new todos state
        // Create new todo list app state (newTodosState) by copying the current todo list app state.
        const newTodosState: TodoInterface[] = [...todos]

        // Update new todos state
        newTodosState.push(todo)

        // Update todos state (the todo list app state)
        setTodos(newTodosState)
    }

    // Update existing todo item
    function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
        // Prepare new todos state (same as handleTodoCreate)
        const newTodosState: TodoInterface[] = [...todos]

        // Find correct todo item to update by id and update the text value.
        // New value will come from the value of the input inside the specific todo item.
        newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value

        // Update todos state
        setTodos(newTodosState)
    }

    // Remove existing todo item
    function handleTodoRemove(id: string) {
        // Prepare new todos state
        // Create new todo list app state (newTodosState) by copying the current todo list app state,
        // we use the filter() method to remove the todo that we want to remove.
        const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)

        // Update todos state using the new filtered state.
        setTodos(newTodosState)
    }

    // Check existing todo item as completed
    function handleTodoComplete(id: string) {
        // Copy current todos state (same as handleToUpdate)
        const newTodosState: TodoInterface[] = [...todos]

        // Find the correct todo item/object and update (negate) the isCompleted key.
        newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted

        // Update todos state
        setTodos(newTodosState)
    }

    // Check if todo item has title
    // We watch for a change on the input element inside every todo,
    // so we use ChangeEvent to attach an onChange event handler to the input element.
    // Then, we check that its value is not an empty string (length != 0).
    // If there is an empty string, we add a CSS class.
    // When the user inputs some text, we remove the CSS class.
    function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value.length === 0) {
            event.target.classList.add('todo-input-error')
        } else {
            event.target.classList.remove('todo-input-error')
        }
    }

    // Return all the components that we have created.
    // Make sure to provide all components with the necessary props.
    return (
        <div className="todo-list-app">
            <TodoForm
                todos={todos}
                handleTodoCreate={handleTodoCreate}
            />

            <TodoList
                todos={todos}
                handleTodoUpdate={handleTodoUpdate}
                handleTodoRemove={handleTodoRemove}
                handleTodoComplete={handleTodoComplete}
                handleTodoBlur={handleTodoBlur}
            />
        </div>
    )
}

// Render the App in the DOM
const rootElement = document.getElementById('root')
render(<TodoApp/>, rootElement)

export default TodoApp
