import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Route } from 'react-router-dom';

import App from './containers/App';

import './styles/index.css';


const target = document.querySelector('#cms-root');

render(
    <ConnectedRouter>
      <Route component={App} />
    </ConnectedRouter>
);
