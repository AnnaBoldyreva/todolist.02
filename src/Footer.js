import React from 'react';


class  Footer extends React.Component {
    state = {
        isHidden: false
    };
    onAllFilterClick = () => {
       this.setState({changeFilter : this.props.changeFilter('All') })
    };
    onCompletedFilterClick = () => {
        this.setState({changeFilter: this.props.changeFilter('Completed')})};
    onActiveFilterClick = () => {
        this.setState({changeFilter: this.props.changeFilter('Active')})
    };
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
            { !this.state.isHidden && <div>
            <button onClick={this.onAllFilterClick} className={classForAll }>All</button>
            <button onClick={this.onCompletedFilterClick} className={classForCompleted}>Completed</button>
            <button onClick={this.onActiveFilterClick} className={classForActive}>Active</button>
            </div>}
           <br/>
            {!this.state.isHidden && <span onClick={this.onShowFiltersClick}>hide</span>}
            {this.state.isHidden &&<span onClick={this.onHideFiltersClick}>show</span>}
        </div>
    );
  }
}

export default Footer;
