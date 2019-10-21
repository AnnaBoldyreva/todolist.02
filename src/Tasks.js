import React from 'react';


class  Tasks extends React.Component {
  render =()=> {
    return (
        <div>
            <div>
                <input type='checkbox' checked={true}/>
                <span>HTML</span>
            </div>
            <div>
                <input type='checkbox' checked={true}/>
                <span>CSS</span>
            </div>
            <div>
                <input type='checkbox' checked={true}/>
                <span>JS</span>
            </div>
            <div>
                <input type='checkbox' checked={true}/>
                <span>REACT</span>
            </div>

        </div>
    );
  }
}

export default Tasks;
