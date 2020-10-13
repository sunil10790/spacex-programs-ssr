import { combineReducers } from 'redux';
import launchesReducer from './launchesReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  launches: launchesReducer,
  filters: filterReducer,
});
