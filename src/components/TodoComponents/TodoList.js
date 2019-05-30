// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

//  Receives Todos array and iterates over the list generating a new <Todo /> for each element in the array.

const TodoList = (props) => {
    return (
        <div>
            {props.taskList.map(task => (
               <Todo taskObj={task}/>
            ))}
        </div>    
    );
};


export default TodoList;