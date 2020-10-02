// Import dependencies
import * as React from 'react'
import shortid from 'shortid'

// Import interfaces
import {TodoInterface, TodoFormInterface} from '../store/types'

/**
 * Todo form component
 * Here we use the useState and useRef React hooks.
 *
 * The input element will have two handler methods for onChange and onKeyPress.
 *
 * @param props
 * @constructor
 */
const TodoForm = (props: TodoFormInterface) => {
    // Create ref for form input
    // We use the useRef hook to store the reference to the input.
    // When the user presses "Enter", we use this reference to reset the input
    // by setting the value to an empty string before we create a new todo item.
    const inputRef = React.useRef<HTMLInputElement>(null)

    // Create form state
    // We use the useState hook to store the text passed to the input element (title)
    // before we create a new todo item.
    const [formState, setFormState] = React.useState('')

    // Handle todo input change
    // Update the form state when the use enters something in the input (title/text).
    // We use ChangeEvent to attach onChange handler to the input element.
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        // Update form state with the text from input
        setFormState(event.target.value)
    }

    // Handle 'Enter' in todo input
    // Create new todo object and reset the input field.
    // We use shortid to generate unique id for every new todo by calling generate().
    // We use KeyboardEvent because we are listening for the key press event.
    function handleInputEnter(event: React.KeyboardEvent) {
        // Check for 'Enter' key
        if (event.key === 'Enter') {
            // Prepare new todo object
            const newTodo: TodoInterface = {
                id: shortid.generate(),
                text: formState,
                isCompleted: false
            }

            // Create new todo item
            props.handleTodoCreate(newTodo)

            // Reset the input field
            if (inputRef && inputRef.current) {
                inputRef.current.value = ''
            }
        }
    }

    return (
        <div className="todo-form">
            <input
                ref={inputRef}
                type="text"
                placeholder='Enter new todo'
                onChange={event => handleInputChange(event)}
                onKeyPress={event => handleInputEnter(event)}
            />
        </div>
    )
}

export default TodoForm;
