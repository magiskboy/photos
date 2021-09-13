import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import reportWebVitals from './reportWebVitals';

window.PHOTOS_BASE_URL = 'http://localhost:8000/api';
window.PHOTOS_API_TIMEOUT = 1000;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
