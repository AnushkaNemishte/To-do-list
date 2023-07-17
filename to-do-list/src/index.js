import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
// import "../node_modules/react-bootstrap/dist/react-bootstrap"
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap/dist/react-bootstrap';
import { Provider } from 'react-redux';
import { Store } from './app/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />
    <ToastContainer/>
    </Provider>
  </React.StrictMode>
  
);

