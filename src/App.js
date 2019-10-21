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



  render =()=> {
    return (
        <div>
          <Header addBook={this.addBook}/>
          <Tasks books={this.state.books} />
          <Footer filterValue={this.state.filterValue}/>

        </div>
    );
  }
}

export default App;
