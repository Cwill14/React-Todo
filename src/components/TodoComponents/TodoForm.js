import React from 'react';

// will hold your input field and your `Add Todo` and `Clear Completed` buttons.
// Your input field should take in user input, and allow a user to press `Enter`
//      or click on the `Submit Button` to add a todo to your list.

const TodoForm = (props) => {
    return (
        <form onSubmit={props.addList}>
            <input
                type="text"
                placeholder="task"
                name="task"
                value={props.task}
                onChange={props.onInput}
            />
            <button>Add Task</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;