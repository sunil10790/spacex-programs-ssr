import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';

const createStoreUtility = () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return store;
};

export default createStoreUtility;
