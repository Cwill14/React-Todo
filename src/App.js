import React from 'react';
// import './src/App.scss';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

// export const data = [
//   {
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Bake Cookies',
//     id: 1528817084358,
//     completed: false
//   }
// ];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
    this.state = {
      list: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: true
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      task: "",
      id: "",
      completed: ""
    };
  }
  toggleComplete = (param) => {
    this.setState( () => {
      this.list.map(() => {
        
      });
    });
  };

  addToList = e => {
    // console.log("its working");
    e.preventDefault();
    const newTodo = {
      task: this.state.task,
      // id: this.state.id,
      id: Date.now(),
      // completed: this.state.completed
      completed: false
    }
    this.setState(
      { 
        list: [...this.state.list, newTodo],
        task: "",
        id: "",
        completed: ""
      }
    )
  }
  clearCompleted = e => {
    // console.log("its totally working");
    e.preventDefault();
    let newList = this.state.list.filter(item => item.completed === false);
    console.log(newList);
    this.setState(
      {
        list: newList
      }
    )
  }
  onInput = e => {
    e.preventDefault();
    this.setState(
      {[e.target.name]: e.target.value}
    )
    // console.log(this.state.text);
  }
  render() {
    return (
      <div>
        <h2>Clark's To-do App!</h2>
        <TodoList taskList={this.state.list}/>
        <TodoForm 
          addList={this.addToList}
          clearList={this.clearCompleted}
          task={this.state.task}
          onInput={this.onInput}
        />
      </div>
    );
  }
}

export default App;
