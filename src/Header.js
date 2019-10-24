import React from 'react';


class  Header extends React.Component {
    newBookTitleRef = React.createRef();
    onAddBookClick = () => {
        let newText = this.newBookTitleRef.current.value;
        if (newText === ''){
            this.setState({error : true})
        } else {
            this.setState({error : false})
        }
        this.newBookTitleRef.current.value = '';
        this.props.addBook(newText)
    };

    state = {
        error : false
    };
  render =()=> {
      let errorFilter = this.state.error ? 'error' : '';
    return (
        <div>
            <h3>What to read?</h3>
            <div>
                <input ref={this.newBookTitleRef} type='text' placeholder='new book name' className={errorFilter}/>
                <button onClick={this.onAddBookClick}>Add</button>
            </div>
        </div>
    );
  }
}

export default Header;
