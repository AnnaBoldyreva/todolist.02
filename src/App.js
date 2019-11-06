import React from 'react';
import './App.css';
import TodoList from "./TodoList";


class  App extends React.Component {


  render =()=> {
    return (
        <div className='app'>
            <div className='container'>
          <TodoList/>
          <TodoList/>
            </div>

        </div>
    );
  }
}

export default App;
