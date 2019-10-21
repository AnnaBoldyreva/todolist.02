import React from 'react';
import Books from "./Books";


class  Tasks extends React.Component {
  render =()=> {
    return (
        <div>
            <Books title='A hero of our Time' isDone={true} author='Mikhail Lermontov' published='1840'/>
            <Books title='Dead Souls' isDone={false} author='Nikolay Gogol' published='1842'/>
            <Books title='What is to be Done?' isDone={false} author='Nikolay Chernychevsky' published='1863'/>
            <Books title='Crime and Punishment' isDone={true} author='Fyodor Dostoevsky' published='1867'/>
        </div>
    );
  }
}

export default Tasks;
