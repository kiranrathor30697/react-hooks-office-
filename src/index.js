import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './useContext/rfc/App'
import {UseRefHook} from './useref/rfc/UseRefHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <UseRefHook />
  </React.StrictMode>
);

