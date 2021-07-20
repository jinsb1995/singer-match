import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Components/Root';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

// App이 Root에서 BrowserRouter로 감싸져있으니까 
// Root를 불러와서 그려준다.

ReactDOM.render(
    <Root />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
