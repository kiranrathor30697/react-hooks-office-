import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CountNumberReducer from './UseReducer/CountNumberReducer';
// import CompParent from './useContext/rcc/CompParent';
// import App from './useContext/rfc/App'
// import UseReducer from './UseReducer/UseReducer';
// import UseRefRcc from './useref/rcc/UseRefRcc';
// import {UseRefHook} from './useref/rfc/UseRefHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseRefHook /> */}
    {/* <CompParent /> */}
    {/* <UseRefRcc /> */}
    {/* <UseReducer /> */}
    <CountNumberReducer />
  </React.StrictMode>
);

