import React from 'react';


class  Books extends React.Component {

    onIsDoneChange = (e) => {
     this.props.changeStatus( e.currentTarget.checked, this.props.books.id);
    };

  render =()=> {
    const isDoneFilter = this.props.books.isDone ? 'todoList-task done' : 'todoList-task';
    return (
        <div>
            <div className={isDoneFilter}>
                <input type='checkbox'
                       checked={this.props.books.isDone}
                       onChange={this.onIsDoneChange}/>
                <span> {this.props.books.id}-title: '{this.props.books.title}',  author: {this.props.books.author},  published: {this.props.books.published}
                 </span>
            </div>

        </div>
    );
  }
}

export default Books;
