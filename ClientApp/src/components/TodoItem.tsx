/**
 * Todo item component
 * This component represents a new todo item.
 */

// Import dependencies
import * as React from 'react'

// Import interfaces
import { TodoItemInterface } from '../store/types'

// TodoItem component
const TodoItem = (props: TodoItemInterface) => {
    return (
        <div className='todo-item'>
            {/*
                Allow for checking off items.
                Checked items will contain span with check mark HTML entity, inside a green circle.
                Unchecked items will contain empty span, styled a a transparent circle with border.
            */}
            {/* handler to check/uncheck the item */}
            <div onClick={() => props.handleTodoComplete(props.todo.id)}>
                {props.todo.isCompleted ? (
                    <span className="todo-item-checked">✔</span>
                ) : (
                    <span className="todo-item-unchecked" />
                )}
            </div>

            <div className="todo-item-input-wrapper">
                {/*
                    Make the todo item editable.
                    Settings are passed from the todo object via props.
                    Add handler methods for onBlur and onChange events.
                    Use ChangeEvent method to attach onChange handler to input element.
                */}
                <input
                    value={props.todo.text}
                    onBlur={props.handleTodoBlur}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todo.id)}
                />
            </div>

            {/* Add element to remove the todo item */}
            <div className="item-remove" onClick={() => props.handleTodoRemove(props.todo.id)}>
                ⨯
            </div>
        </div>
    )
}

export default TodoItem;
