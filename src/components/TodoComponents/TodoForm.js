import React from 'react';

// will hold your input field and your `Add Todo` and `Clear Completed` buttons.
// Your input field should take in user input, and allow a user to press `Enter`
//      or click on the `Submit Button` to add a todo to your list.

const TodoForm = () => {
    return (
        <form onSubmit="addToList">
            <input
                type="text"
                placeholder="task"
                // value={someValue}
            />
            <button type="submit" >Add Task</button>
            <button>Clear Completed</button>
        </form>
    );
}

export default TodoForm;