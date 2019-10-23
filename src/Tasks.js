import React from 'react';
import Books from "./Books";


class  Tasks extends React.Component {
  render =() => {
      let booksElements = this.props.books.map((book) => {
          return <Books books={book}
          changeStatus={this.props.changeStatus}/>
      });
    return (
        <div>
            {booksElements}
        </div>
    );
  }
}

export default Tasks;
