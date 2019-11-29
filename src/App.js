import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";





class  App extends React.Component {

    nextItemId = 0;

    state = {
        todoLists:[]
    };

    addTodoList = (title) => {
        let newItem = {
            title: title,
            id: this.nextItemId
        };
        this.nextItemId ++ ;
       this.setState({todoLists: [...this.state.todoLists, newItem]},
           ()=> {
           this.saveState();
           })
    };
    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('todoLists', stateAsString)
    };

    restoreState = () => {
        let stateAsString = localStorage.getItem('todoLists');
        if (stateAsString) {
         let state = JSON.parse(stateAsString);
            state.todoLists.forEach(b=>{
                if(b.id>= this.nextItemId ){
                    this.nextItemId  = b.id+ 1
                }
            });
            this.setState(state);
        }
    };

  render =()=> {
      const todoLists = this.props.todoLists.map(tl => <TodoList id={tl.id} title={tl.title}/> );
    return (
        <>
        <div>
            <AddNewItemForm addItem={this.addTodoList}/>
        </div>
        <div className='App'>
            {todoLists}
        </div>
            </>
    );
  }
}

export default App;
