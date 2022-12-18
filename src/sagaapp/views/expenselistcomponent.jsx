import React from "react";


const ExpensesListComponent=(props)=>{
    return(
        <div className="container">
            <h2>List of Recorded Expenses</h2>
            <strong>
                {JSON.stringify(props.allexpenses)}
            </strong>
        </div>
    );
};

export default ExpensesListComponent;