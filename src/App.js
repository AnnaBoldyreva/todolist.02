import React from 'react';
import './App.css';
import Header from "./Header";
import Tasks from "./Tasks";
import Footer from "./Footer";
class  App extends React.Component {




    state = {
        books : [
            {id: 1, title:'A hero of our Time', isDone:true, author:'Mikhail Lermontov', published: 1840},
            {id: 2, title:'Dead Souls', isDone: false,  author:'Nikolay Gogol', published: 1842},
            {id: 3,title:'What is to be Done?', isDone: false, author:'Nikolay Chernychevsky', published: 1863},
            {id: 4,title:'Crime and Punishment', isDone: true, author:'Fyodor Dostoevsky', published: 1867}
        ],
        filterValue: 'All'
    };

    nextTaskId = 5;

    addBook = (newText) => {
        let newBook = {
          id: this.nextTaskId,  title: newText, isDone:false, author:' ', published: ' '
        };
        this.nextTaskId++;
        let newBooks = [...this.state.books, newBook];
        this.setState({
            books: newBooks
        });
    };

    changeFilter = (newFilterValue) => {
        this.setState({filterValue:newFilterValue})
    };

    changeStatus = (status, bookId) => {
        let newBooks = this.state.books.map( b => {
            if (b.id === bookId) {
                return {...b, isDone: status};
            }
            return b;
        });
        this.setState({
            books: newBooks
        });
    };



  render =()=> {
    return (
        <div className='app'>
            <div className='container'>
          <Header addBook={this.addBook}/>
          <Tasks changeStatus={this.changeStatus}
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

export default App;
