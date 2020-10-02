// Import dependencies
import * as React from 'react'

// Import TodoItem
import TodoItem from './TodoItem'

// Import interfaces
import { TodoListInterface } from '../store/types'
import TodoForm from "./TodoForm";

/**
 * TodoList component
 * This component will display the list of TodoItem.
 * It accepts the handler methods for TodoItem and an array of todo objects via props.
 * We use map() to iterate over the array of todo objects, and create one li element
 * with one TodoItem component for every todo object.
 * Then we pass each todo object to the TodoItem component (along with handler methods).
 *
 * @param props
 * @constructor
 */
const TodoList = (props: TodoListInterface) => {
    return (
        <div className="todo-list">
            <ul>
                {props.todos.map((todo) => (
                    <li key={todo.id}>
                        <TodoItem
                            todo={todo}
                            handleTodoUpdate={props.handleTodoUpdate}
                            handleTodoRemove={props.handleTodoRemove}
                            handleTodoComplete={props.handleTodoComplete}
                            handleTodoBlur={props.handleTodoBlur}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
