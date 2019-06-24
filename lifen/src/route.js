import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Upload from './containers/Upload';


export const urls = [
  { path: '/', breadcrumb: 'Upload' },
];

export const Routes = ({ location }) => (
  <Switch location={location}>
    <Route exact path="/" component={Upload} name="Upload" />
  </Switch>
);

Routes.propTypes = {
  location: PropTypes.shape({}).isRequired,
};
