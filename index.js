import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './resourses/redux/store';

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(
  Provider,
  { store: store },
  React.createElement(
    BrowserRouter,
    null,
    React.createElement(App, null)
  )
));
reportWebVitals();