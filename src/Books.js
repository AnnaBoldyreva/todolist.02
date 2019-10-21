import React from 'react';


class  Books extends React.Component {

    onIsDoneChange = (e) => {
        this.props.changeStatus(this.props.book, e.currentTarget.checked)
    };

  render =()=> {

    return (
        <div>
            <div>
                <input type='checkbox' checked={this.props.book.isDone} onChange={this.onIsDoneChange}/>
                <span>title: '{this.props.book.title}',  author: {this.props.book.author},  published: {this.props.book.published}
                 </span>
            </div>

        </div>
    );
  }
}

export default Books;
