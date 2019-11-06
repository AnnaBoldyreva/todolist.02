import React from 'react';
import './App.css';
import Header from "./Header";
import Tasks from "./Tasks";
import Footer from "./Footer";

class  TodoList extends React.Component {


    state = {
        books : [
            // {id: 1, title:'A hero of our Time', isDone:true, author:'Mikhail Lermontov', published: 1840},
            // {id: 2, title:'Dead Souls', isDone: false,  author:'Nikolay Gogol', published: 1842},
            // {id: 3,title:'What is to be Done?', isDone: false, author:'Nikolay Chernychevsky', published: 1863},
            // {id: 4,title:'Crime and Punishment', isDone: true, author:'Fyodor Dostoevsky', published: 1867}
        ],
        filterValue: 'All'
    };

    nextTaskId = 0;

    componentDidMount() {
        this.restoreState();
    }

    addBook = (newText) => {
        let newBook = {
          id: this.nextTaskId,  title: newText, isDone:false, author:' ', published: ' '
        };
        this.nextTaskId++;
        let newBooks = [...this.state.books, newBook];
        this.setState({
            books: newBooks
        }, ()=> {this.saveState();})
    };

    changeFilter = (newFilterValue) => {
        this.setState({filterValue:newFilterValue})
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

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('our-state-' + this.props.id, stateAsString)
    };

    restoreState = () => {
        let state = {
            books: [],
            filterValue: 'All'
        };
        let stateAsString = localStorage.getItem('our-state-'  + this.props.id);
        if (stateAsString !== null){
            state = JSON.parse(stateAsString)
        }
        this.setState(state, ()=>{this.state.books.forEach(b=>{
            if(b.id>= this.nextTaskId){
                this.nextTaskId = b.id+ 1
            }
        })})

    };




  render =()=> {
    return (
        <div className='app'>
            <div className='container'>
          <Header addBook={this.addBook} title={this.props.title}/>
          <Tasks changeStatus={this.changeStatus}
                 changeTitle={this.changeTitle}
              books={this.state.books.filter((book)=> {
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

export default TodoList;
