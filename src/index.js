import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { AuthContextProvider } from './Contexts/AuthContextProvider';
import reportWebVitals from './reportWebVitals';

import './styles/global.scss';
import { Provider } from 'react-redux'
import store from './Redux/store'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
