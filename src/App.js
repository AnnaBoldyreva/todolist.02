import React from 'react';
import './App.css';
import Header from "./Header";
import Tasks from "./Tasks";
import Footer from "./Footer";
class  App extends React.Component {

    state = {
        books : [
            {title:'A hero of our Time', isDone:true, author:'Mikhail Lermontov', published: 1840},
            {title:'Dead Souls', isDone: false,  author:'Nikolay Gogol', published: 1842},
            {title:'What is to be Done?', isDone: false, author:'Nikolay Chernychevsky', published: 1863},
            {title:'Crime and Punishment', isDone: true, author:'Fyodor Dostoevsky', published: 1867}
        ],
        filterValue: 'All'
    };

    addBook = (newText) => {
        let newBook = {
            title: newText, isDone:false, author:' ', published: ' '
        };
        let newBooks = [...this.state.books, newBook];
        this.setState({
            books: newBooks
        });
    };

    changeFilter = (newFilterValue) => {
        this.setState({filterValue:newFilterValue})
    };

    changeStatus = (status, book) => {
        let newBooks = this.state.books.map( b => {
            if (b === book) {
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
    );
  }
}

export default App;
