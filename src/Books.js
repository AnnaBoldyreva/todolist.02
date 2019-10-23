import React from 'react';


class  Books extends React.Component {

    onIsDoneChange = (e) => {
     this.props.changeStatus( e.currentTarget.checked, this.props.books);
    };

  render =()=> {

    return (
        <div>
            <div>
                <input type='checkbox'
                       checked={this.props.books.isDone}
                       onChange={this.onIsDoneChange}/>
                <span>title: '{this.props.books.title}',  author: {this.props.books.author},  published: {this.props.books.published}
                 </span>
            </div>

        </div>
    );
  }
}

export default Books;
