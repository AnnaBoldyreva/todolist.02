import React from 'react';
import './App.css';
import TodoList from "./TodoList";


class  App extends React.Component {

    state = {
        todoLists:[
            {id: 1, title: 'What to learn?'},
            {id: 2, title: 'What to do?'}
            ]
    };

  render =()=> {
      const todoLists = this.state.todoLists.map(tl => <TodoList id={tl.id} title={tl.title}/> );
    return (

        <div className='App'>
            {todoLists}
        </div>
    );
  }
}

export default App;
