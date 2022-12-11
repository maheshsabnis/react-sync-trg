// Standard imports
import React from 'react';
import ReactDOM from 'react-dom/client';
// importing CSS
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// The 'App' is a Exported component from App.js 
import App from './App';
import FirstComponent from './components/firstcomponent/firstcomponent';
import ParentPropsComponent from './components/statecomponent/propscomponent';
import ExpensesComponent from './components/expensescomponent/expensescomponent';
import ExpensesContextComponent from './components/expensescontectcomponent/expensescontextcomponent';
import reportWebVitals from './reportWebVitals';


// Local a HTMl element on idnex HTML which will
// be used as 'root' element to MOUNT the react component
const root = ReactDOM.createRoot(document.getElementById('root'));
// The 'render()' methdo that Mounts the React compoennt 'App'
// React.StrictMode: used to make sure that the HTMl elements from COmponent
// will be mouneted only when there are no errors in them
// Thsi will be managed usig JSX

let msg = 'Hello!! from Root';
// message : a custom property that will be created by JSX for the component
// the value for this property will be set using 'props' object
root.render(
  <React.StrictMode>
    <ExpensesContextComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
