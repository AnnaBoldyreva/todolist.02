import React from 'react';
import './App.css';
import Header from "./Header";
import Tasks from "./Tasks";
import Footer from "./Footer";
import Books from "./Books";

class  App extends React.Component {

    books = [
        {title:'A hero of our Time', isDone:true, author:'Mikhail Lermontov', published: 1840},
        {title:'Dead Souls', isDone: false,  author:'Nikolay Gogol', published: 1842},
        {title:'What is to be Done?', isDone: false, author:'Nikolay Chernychevsky', published: 1863},
        {title:'Crime and Punishment', isDone: true, author:'Fyodor Dostoevsky', published: 1867}
    ];
    filterValue = 'All';

  render =()=> {
    return (
        <div>
          <Header/>
          <Tasks books={this.books}/>
          <Footer filterValue={this.filterValue}/>

        </div>
    );
  }
}

export default App;
