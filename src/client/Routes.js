import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';

const Routes = () => {
  return (
    <div>
      <Route exact path='/' component={App} />
    </div>
  );
};

export default Routes;
