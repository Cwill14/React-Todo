import React from 'react';
import './Todo.css';

// takes in the `todo` data and displays the task to the screen.

const Todo = props => {
    return (
        <div 
            className={`task${props.completed === true ? ' completed-style' : ''}`}
            onClick={() => props.toggleComplete(props.taskObj.id)}
        >
            {props.taskObj.task}
        </div>
    )
};

export default Todo;