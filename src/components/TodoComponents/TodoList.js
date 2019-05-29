// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';

//  Receives Todos array and iterates over the list generating a new <Todo /> for each element in the array.

class TodoList extends React.Component {

    render() {
        return (
            <div>
                <div>
                    {todoarray.map(param => (
                        <Todo prop={param}/>
                    ))}
                </div>
                <TodoForm />
            </div>
            
        );
    };
};

export default TodoList;