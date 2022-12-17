// Standard imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
// importing CSS
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// The 'App' is a Exported component from App.js 
import App from './App';
import FirstComponent from './components/firstcomponent/firstcomponent';
import ParentPropsComponent from './components/statecomponent/propscomponent';
import ExpensesComponent from './components/expensescomponent/expensescomponent';
import ExpensesContextComponent from './components/expensescontectcomponent/expensescontextcomponent';
import ExpensesAjaxComponent from './components/expensesajaxcomponent/expensesajaxcomponent';
import ToggleComponent from './components/lifecyclehooks/togglecomponent';
import ContainerComponent from './components/errorboundaries/errorboundariescomponent';
import MyContainerErrorBoundaryComponent from './components/errorboundaries/actualerrorboundariescomponent';
import MainRoutingComponent from './reoutingapp/mainroutingcomponent';
import CustomHookUserComponent from './components/customhooks/customhookusercomponent';
// Using HOC

import { Companies, Stocks } from './models/constants';
import CompanyComponent from './components/hoc/companycomponent';
import StockComponent from './components/hoc/stockcomponent';
import HocComponent from './components/hoc/hoccomponent';
import reportWebVitals from './reportWebVitals';

let companies = Companies;
// Local a HTMl element on idnex HTML which will
// be used as 'root' element to MOUNT the react component
const root = ReactDOM.createRoot(document.getElementById('root'));
// The 'render()' methdo that Mounts the React compoennt 'App'
// React.StrictMode: used to make sure that the HTMl elements from COmponent
// will be mouneted only when there are no errors in them
// Thsi will be managed usig JSX

let msg = 'Hello!! from Root';

// the Hoc In Practice
const CompanyHComponent = HocComponent(CompanyComponent, Companies, {canDelete:true});
const StockHComponent = HocComponent(StockComponent, Stocks);


// message : a custom property that will be created by JSX for the component
// the value for this property will be set using 'props' object
root.render(
  <React.StrictMode>
      {/* <BrowserRouter>
         <MainRoutingComponent/>
      </BrowserRouter> */}
        {/* <div>
           <CompanyHComponent/>
           <hr/>
           <StockHComponent/>
        </div> */}
        <CustomHookUserComponent/>
       
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
