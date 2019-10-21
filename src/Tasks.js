import React from 'react';
import Books from "./Books";


class  Tasks extends React.Component {
  render =()=> {
      let booksElements = this.props.books.map((book) => {
          return <Books title={book.title} isDone={book.isDone} author={book.author} published={book.published}/>
      });
    return (
        <div>
            {booksElements}
        </div>
    );
  }
}

export default Tasks;
