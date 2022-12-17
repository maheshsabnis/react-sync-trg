import React from "react";
import DataGridComponent from "../reusablecomponent/datagridcomponent";
import {useAjax} from './useAjaxHook';
const CustomHookUserComponent=()=>{
 const response = useAjax('https://expensesservicemaui.azurewebsites.net/api/expenses');
 if(response === undefined){
    return (
        <div className="alert alert-danger">
            No Data Received
        </div>
    );
 }else{
    return(
        <div className="container">
            <DataGridComponent dataSource={response}/>
        </div>
    );
 }
};

export default CustomHookUserComponent;