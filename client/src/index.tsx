import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import Auth0ProviderWithHistory from './components/auth/Auth0ProviderWithHistory';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
