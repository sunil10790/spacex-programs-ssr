import React from 'react';
import App, { loadData } from './components/App';

const Routes = [
  {
    loadData,
    path: '/',
    component: App,
    exact: true,
  },
];

export default Routes;
