import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
 <App />
  
  
  </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

