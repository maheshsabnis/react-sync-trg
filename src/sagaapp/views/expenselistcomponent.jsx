import React,{useState, useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux';
import { getExpenses } from "../actions/actions";
import DataGridComponent from './../../components/reusablecomponent/datagridcomponent';

const ExpensesListComponent=(props)=>{
    const [expenses, updateExpenses] = useState([]);

    // 1. Lets subscribe to the store to get the data 
    // from the store

    // state.expenses is expenses data from the store
    const storeData = useSelector((state)=>state.expenses);

    // 2.  define a dispatcher
    const dispatch = useDispatch();

    // 3. make use of useEffect() hook to dispatch 
    // GET_EXPENSES action to get the data

    useEffect(()=>{
        // a. this will dispatch getExtenses() action method
        // b. the saga will monitor GET_EXPENSES
        // c. acrodingly the ajax call will be executed by saga
        // d. the saga will dispatch GET_EXPENSES_SEUCCESS output action with expenses data
        // e. reducer will listen to GET_EXPENSES_SEUCCESS with the expenses data
        // f. the reducer will update the expenses data in store
        dispatch(getExpenses());
        // g. the data from the store will be updated into the state
        updateExpenses(storeData);
    },[storeData]);


    return(
        <div className="container">
            <h2>List of Recorded Expenses</h2>
            <strong>
            
                <DataGridComponent dataSource={expenses}></DataGridComponent>
            </strong>
        </div>
    );
};

export default ExpensesListComponent;