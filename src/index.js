// <<<<<<< HEAD
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import {BrowserRouter as Router } from 'react-router-dom';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Router>
// );
// =======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./app/store.js";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById("root"));
const clientId = "513990177787-d2n8mp5s24kcska6ed0sk54voo9uoeaq.apps.googleusercontent.com";
root.render(
  <Router>
    <GoogleOAuthProvider clientId={clientId}>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </GoogleOAuthProvider>
  </Router>
);

