import React from 'react';


class  Footer extends React.Component {
    state = {
        isHidden: false
    };
    onAllFilterClick = () => {};
    onCompletedFilterClick = () => {};
    onActiveFilterClick = () => {};
    onShowFiltersClick = () => {
        this.setState({isHidden : true})
    };
    onHideFiltersClick = () => {this.setState({isHidden: false})};

    render =()=> {
      let classForAll = this.props.filterValue === 'All' ? 'filterActive': ' ' ;
      let classForCompleted = this.props.filterValue === 'Completed' ? 'filterActive': ' ' ;
      let classForActive = this.props.filterValue === 'Active' ? 'filterActive': ' ' ;
    return (
        <div>
            <button onClick={()=> {this.props.changeFilter('All')}} className={classForAll }>All</button>
            <button onClick={()=> {this.props.changeFilter('Completed')}} className={classForCompleted}>Completed</button>
            <button onClick={()=> {this.props.changeFilter('Active')}} className={classForActive}>Active</button>
           <br/>
            {!this.state.isHidden && <span onClick={this.onShowFiltersClick}>hide</span>}
            {this.state.isHidden &&<span onClick={this.onHideFiltersClick}>show</span>}
        </div>
    );
  }
}

export default Footer;
