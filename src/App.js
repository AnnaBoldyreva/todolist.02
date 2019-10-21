import React from 'react';
import './App.css';
import Header from "./Header";
import Tasks from "./Tasks";
import Footer from "./Footer";

class  App extends React.Component {
  render =()=> {
    return (
        <div>
          <Header/>
          <Tasks/>
          <Footer/>

        </div>
    );
  }
}

export default App;
