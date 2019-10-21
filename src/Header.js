import React from 'react';


class  Header extends React.Component {
  render =()=> {
    return (
        <div>
            <h3>What to read?</h3>
            <div>
                <input type='text' placeholder='new book name'/>
                <button>Add</button>
            </div>
        </div>
    );
  }
}

export default Header;
