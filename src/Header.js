import React from 'react';


class  Header extends React.Component {
    newBookTitleRef = React.createRef();
    onAddBookClick = () => {
        let newText = this.state.title;
        if (newText === ''){
            this.setState({error : true})
        } else {
            this.setState({error : false})
        }
        this.setState({title: ''});
        this.props.addBook(newText)
    };


    onErrorChanged = ()=> {
        this.setState({error:false})
    };



    onKeyPress = (e) => {
        if (e.key === 'Enter'){
            this.onAddBookClick()
        }
    };

    onChangeTitle = (e)=> {
        this.setState({title:e.currentTarget.value })
    };


    state = {
        error : false,
        title : ''
    };


  render =()=> {
      let errorFilter = this.state.error ? 'error' : '';
    return (
        <div>
            <h3>What to read?</h3>
            <div>
                <input ref={this.newBookTitleRef}
                       type='text'
                       placeholder='new book name'
                       className={errorFilter}
                       onChange={this.onChangeTitle}
                       onKeyPress={this.onKeyPress}
                       value={this.state.title}
                       onInput={this.onErrorChanged}
                />
                <button onClick={this.onAddBookClick}>Add</button>
            </div>
        </div>
    );
  }
}

export default Header;
