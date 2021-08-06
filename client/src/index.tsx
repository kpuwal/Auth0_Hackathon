import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './redux/store';
import * as dotenv from "dotenv";
dotenv.config();

// const auth0Domain = process.env.REACT_APP_DOMAIN!;
// const auth0ClientId = process.env.REACT_APP_CLIENT_ID!;

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
    domain='dev-vbba6ora.us.auth0.com'
    clientId='EbgOAAS1zI9dTGlFRn8VtmJ2sKXmcGyM'
    redirectUri={window.location.origin}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);
