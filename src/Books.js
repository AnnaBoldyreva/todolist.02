import React from 'react';


class  Books extends React.Component {

    state = {
      editMode : false
    };

    activateEditMode = () => {
        this.setState({editMode : true })
    };

    deactivateEditMode = () => {
        this.setState({editMode: false})
    };

    onIsDoneChange = (e) => {
     this.props.changeStatus( e.currentTarget.checked, this.props.books.id);
    };

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.books.id, e.currentTarget.value )
    };

  render =()=> {
    const isDoneFilter = this.props.books.isDone ? 'todoList-task done' : 'todoList-task';
    return (
        <div>
            <div className={isDoneFilter}>
                <input type='checkbox'
                       checked={this.props.books.isDone}
                       onChange={this.onIsDoneChange}/>
                {this.state.editMode
                ? <input onBlur={this.deactivateEditMode} onChange={this.onTitleChanged} autoFocus={true} value={this.props.books.title}/>
                    : <span onClick={this.activateEditMode}> {this.props.books.id} - title: '{this.props.books.title}'</span>},  author: {this.props.books.author},  published: {this.props.books.published}
            </div>

        </div>
    );
  }
}

export default Books;
