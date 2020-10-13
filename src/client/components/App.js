import React, { Component } from 'react';
import Filters from './Filters';
import ProgramsList from './ProgramsList';
import { connect } from 'react-redux';
import { fetchLaunches } from '../actions';
import * as filterActions from '../actions/filterActions';
import { bindActionCreators } from 'redux';
import { filter } from 'lodash';
//import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchLaunches();
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    console.log(this.props.filters);
    console.log(nextProps.filters);
    if (this.props.filters !== nextProps.filters) {
      console.log('not equal');
      this.props.fetchLaunches();
    }
  }

  handleButtonClick = (type, value) => {
    console.log(this.props);
    this.props.updateFilters({
      key: type,
      value: value,
    });
  };

  render() {
    return (
      <div>
        {this.props.filters[0]}
        <h2>SpaceX Launch Programs</h2>
        <div className='main-content'>
          <Filters onButtonClick={this.handleButtonClick} />
          <ProgramsList launches={this.props.launches} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  debugger;
  return { launches: state.launches, filters: state.filters };
}

function mapDispatchToProps(dispatch) {
  return {
    //actions: bindActionCreators({ fetchLaunches, filterActions }, dispatch),
    updateFilters: (filter) => dispatch(filterActions.updateFilters(filter)),
    fetchLaunches: () => dispatch(fetchLaunches()),
  };
}

function loadData(store) {
  return store.dispatch(fetchLaunches());
}

export { loadData };
export default connect(mapStateToProps, mapDispatchToProps)(App);
