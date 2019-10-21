import React from 'react';
import './App.css';
import Header from "./Header";
import Tasks from "./Tasks";

class  App extends React.Component {
  render =()=> {
    return (
        <div>
          <Header/>
          <Tasks/>

        </div>
    );
  }
}

export default App;
