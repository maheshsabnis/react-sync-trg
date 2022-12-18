import React from "react";
import AddExpensesComponent from "./views/addexpensescomponent";
import ExpensesListComponent from "./views/expenselistcomponent";

const MainReduxSagaComponent=()=>{

    return(
        <div className="container">
            <AddExpensesComponent></AddExpensesComponent>
            <hr/>
            <ExpensesListComponent></ExpensesListComponent>
        </div>
    );
};

export default MainReduxSagaComponent;