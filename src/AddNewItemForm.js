import React from 'react';
import './App.css';


class  AddNewItemForm extends React.Component {
    newBookTitleRef = React.createRef();
    onAddItemClick = () => {
        let newText = this.state.title;
        if (newText === ''){
            this.setState({error : true})
        } else {
            this.setState({error : false})
        }
        this.setState({title: ''});
        this.props.addItem(newText)
    };

    onErrorChanged = ()=> {
        this.setState({error:false})
    };

    onKeyPress = (e) => {
        if (e.key === 'Enter'){
            this.onAddItemClick()
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
        <div >
            <div>
                <input ref={this.newBookTitleRef}
                       type='text'
                       placeholder='title...'
                       className={errorFilter}
                       onChange={this.onChangeTitle}
                       onKeyPress={this.onKeyPress}
                       value={this.state.title}
                       onInput={this.onErrorChanged}
                />
                <br/>
                <button onClick={this.onAddItemClick} className='forButton'>Add</button>
            </div>
        </div>
    );
  }
}

export default AddNewItemForm;
