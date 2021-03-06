import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>  
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
