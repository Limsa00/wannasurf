/**
 * @file index.js
 * @description Point d'entrée de l'application côté client.
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter
} from "react-router-dom";
import App from './App';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import { UserContextProvider } from './context/UserContext';

/**
 * Rend le composant racine de l'application dans le DOM.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // notre composant app est entouré par le provider de react et le browser router pour nous permettre de nous en ServiceWorkerRegistration, et react toastify et integré dedans
  <BrowserRouter>
    <UserContextProvider>
      <App />
      <ToastContainer />
    </UserContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
