import React from 'react';


class  Footer extends React.Component {
  render =()=> {
      let classForAll = this.props.filterValue === 'All' ? 'filterActive': ' ' ;
      let classForCompleted = this.props.filterValue === 'Completed' ? 'filterActive': ' ' ;
      let classForActive = this.props.filterValue === 'Active' ? 'filterActive': ' ' ;
    return (
        <div>
            <button className={classForAll }>All</button>
            <button className={classForCompleted}>Completed</button>
            <button className={classForActive}>Active</button>
        </div>
    );
  }
}

export default Footer;
