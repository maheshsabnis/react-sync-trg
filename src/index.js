// Standard imports
import React from 'react';
import ReactDOM from 'react-dom/client';
// Imports used for react and redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './reduxapp/reducers/reducer';
 
// importing CSS
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import MainReduxComponent from './reduxapp/mainreduxcomponent';
import reportWebVitals from './reportWebVitals';
// Local a HTMl element on idnex HTML which will
// be used as 'root' element to MOUNT the react component
const root = ReactDOM.createRoot(document.getElementById('root'));


// using redux object model
let enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// The reducers will be monitor all actions those are dispatched
// from all components usder the 'Provoder' which is using the 'store' object 
let store = createStore(reducers, enhancer);


// message : a custom property that will be created by JSX for the component
// the value for this property will be set using 'props' object
root.render(
  <React.StrictMode>
   {/* Load the Store at root level so that all components under it can use it */}
    <Provider store={store}>
       <MainReduxComponent/>
    </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
