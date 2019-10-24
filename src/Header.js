import React from 'react';


class  Header extends React.Component {
    newBookTitleRef = React.createRef();
    onAddBookClick = () => {
        let newText = this.newBookTitleRef.current.value;
        this.newBookTitleRef.current.value = '';
        this.props.addBook(newText)
    };

    state = {
        error : true
    };
  render =()=> {
    return (
        <div>
            <h3>What to read?</h3>
            <div>
                <input ref={this.newBookTitleRef} type='text' placeholder='new book name' className='error'/>
                <button onClick={this.onAddBookClick}>Add</button>
            </div>
        </div>
    );
  }
}

export default Header;
