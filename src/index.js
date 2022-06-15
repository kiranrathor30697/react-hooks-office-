import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UseCallBack from './useCallbackHook/UseCallBack';
import UseId from './useIdHook/UseId';
import UseMemo from './useMemoHook/UseMemo';
import CountNumberReducer from './UseReducerHook/CountNumberReducer';
// import CompParent from './useContext/rcc/CompParent';
// import App from './useContext/rfc/App'
// import UseReducer from './UseReducerHook/UseReducer';
// import UseRefRcc from './useRefHook/rcc/UseRefRcc';
// import {UseRefHook} from './useRefHook/rfc/UseRefHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseRefHook /> */}
    {/* <CompParent /> */}
    {/* <UseRefRcc /> */}
    {/* <UseReducer /> */}
    {/* <CountNumberReducer /> */}
    {/* <UseMemo /> */}
    {/* <UseCallBack /> */}
    <UseId />
  </React.StrictMode>
);

