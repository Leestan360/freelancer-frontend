import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/style.css';
import "./css/responsive.css";
import "./css/datepicker.min.css";
import "./css/jquery.range.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./vendor/fontawesome-free/css/all.min.css";
import "./vendor/OwlCarousel/assets/owl.carousel.css";
import "./vendor/OwlCarousel/assets/owl.theme.default.min.css";
import "./css/jquery.mCustomScrollbar.min.css";
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
