import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import AddExpensesComponent from "./views/addexpensescomponent";
import ExpensesListComponent from "./views/expenselistcomponent";

import addExpense from "./actions/actions";

const MainReduxComponent=()=>{

    // create a dispatch object so that an action can be dispatched

    let dispatch = useDispatch();
    // Let this component subscribe to the store using useSelector and the reducer name
    // to read data from store
    let expenses = useSelector(state=>state.listExpensesReducer);

    return(
        <div className="container">
            {/* 
                Dispatch the addExpense action  
                the AddExpenses is a props, that is subscribed by the current component
                it is dispatching an addExpens() action method using 'dispatch' object
                of type useDispatch() hook
                Since the props is used the 'expense' is a parameter that the current
                object will received from the the child component i.e.AddExpensesComponent
            */}
            <AddExpensesComponent AddExpenses={(expense)=>dispatch(addExpense(expense))}></AddExpensesComponent>
            <hr/>
            {/* Pass data receibed from store to the compoennt */}
            <ExpensesListComponent allexpenses={expenses}></ExpensesListComponent>
        </div>
    );
};

export default MainReduxComponent;