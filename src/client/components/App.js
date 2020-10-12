import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLaunches } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchLaunches();
  }

  renderLaunches() {
    return this.props.launches.map((program) => {
      return <li key={program.flight_number}>{program.mission_name}</li>;
    });
  }

  render() {
    return (
      <div>
        <h3>Launches:</h3>
        <ul>{this.renderLaunches()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { launches: state.launches };
}

function loadData(store) {
  return store.dispatch(fetchLaunches());
}

export { loadData };
export default connect(mapStateToProps, { fetchLaunches })(App);
