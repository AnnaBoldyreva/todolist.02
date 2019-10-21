import React from 'react';


class  Books extends React.Component {
  render =()=> {
    return (
        <div>
            <div>
                <input type='checkbox' checked={this.props.isDone}/>
                <span>title:'{this.props.title}', author: {this.props.author}, published: {this.props.published}
                 </span>
            </div>

        </div>
    );
  }
}

export default Books;
