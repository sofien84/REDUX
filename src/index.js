import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './I.S/store';
import {Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

