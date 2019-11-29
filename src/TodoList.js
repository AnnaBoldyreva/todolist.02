import React from 'react';
import './App.css';
import AddNewItemForm from "./AddNewItemForm";
import Tasks from "./Tasks";
import Footer from "./Footer";
import TodoListTitle from "./TodoListTitle";
import {connect} from "react-redux";

class  TodoList extends React.Component {


    state = {
        filterValue: 'All'
    };

    nextTaskId = 0;

    // componentDidMount() {
    //     this.restoreState();
    // }

    changeFilter = (newFilterValue) => {
        this.setState({filterValue:newFilterValue})
    };

    addBook = (newText) => {
        let newBook = {
            id: this.nextTaskId,  title: newText, isDone:false, author:' ', published: ' '
        };
        this.nextTaskId++;
        this.props.addBook(newBook);
        // let newBooks = [...this.state.books, newBook];
        // this.setState({
        //     books: newBooks
        // }, ()=> {this.saveState();})
    };

    changeStatus = (status, bookId) => {
        this.changeTask(bookId,{isDone: status})
    };

    changeTitle = (bookId, title) => {
        this.changeTask(bookId,{title: title})
    };

    changeTask = (bookId, obj) => {
        let newBooks = this.state.books.map(b => {
            if (b.id !== bookId) {
                return b;
            }
            else {
                return {...b, ...obj};
            }
        });
        this.setState({
            books: newBooks
        },()=> {this.saveState();})
    };
    //
    // saveState = () => {
    //     let stateAsString = JSON.stringify(this.state);
    //     localStorage.setItem('our-state-' + this.props.id, stateAsString)
    // };
    //
    // restoreState = () => {
    //     let state = {
    //         books: [],
    //         filterValue: 'All'
    //     };
    //     let stateAsString = localStorage.getItem('our-state-'  + this.props.id);
    //     if (stateAsString !== null){
    //         state = JSON.parse(stateAsString)
    //     }
    //     this.setState(state, ()=>{this.state.books.forEach(b=>{
    //         if(b.id>= this.nextTaskId){
    //             this.nextTaskId = b.id+ 1
    //         }
    //     })})
    //
    // };




  render =()=> {
    return (
        <div className='app'>
            <div className='container'>
                <div>
                    <TodoListTitle title={this.props.title}/>
                    <AddNewItemForm addItem={this.addBook} />
                </div>
          <Tasks changeStatus={this.changeStatus}
                 changeTitle={this.changeTitle}
              books={this.props.books.filter((book)=> {
              switch (this.state.filterValue){
                  case 'All': return true;
                  case 'Completed': return book.isDone;
                  case 'Active': return !book.isDone;
                  default: return true;
              }
          })} />
          <Footer filterValue={this.state.filterValue} changeFilter={this.changeFilter}/>
            </div>

        </div>
    );
  }
}



 const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (newBook)=> {
            const action = {
                type: 'ADD_TASK',
                newBook: newBook
            };
            dispatch(action)
        }
    }
};

export default connect(null,mapDispatchToProps)(TodoList);
