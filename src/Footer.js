import React from 'react';


class  Footer extends React.Component {
  render =()=> {
      let classForAll = this.props.filterValue === 'All' ? 'filterActive': ' ' ;
      let classForCompleted = this.props.filterValue === 'Completed' ? 'filterActive': ' ' ;
      let classForActive = this.props.filterValue === 'Active' ? 'filterActive': ' ' ;
    return (
        <div>
            <button onClick={()=> {this.props.changeFilter('All')}} className={classForAll }>All</button>
            <button onClick={()=> {this.props.changeFilter('Completed')}} className={classForCompleted}>Completed</button>
            <button onClick={()=> {this.props.changeFilter('Active')}} className={classForActive}>Active</button>
        </div>
    );
  }
}

export default Footer;
