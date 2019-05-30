import React from 'react';


// takes in the `todo` data and displays the task to the screen.

const Todo = (props) => {
    return (
        <div>
            {props.taskObj.task}
        </div>
    )
};

export default Todo;