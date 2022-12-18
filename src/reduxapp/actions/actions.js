const addExpense=(expense)=>{
    // some logic here, this MUST be sync logic 
    expense.ExpenseDetails = expense.ExpenseDetails.toUpperCase();     
    console.log(`Data in Actions ${JSON.stringify(expense)}`);
    return ({
        type:'ADD_EXPENSE_SUCCESS', // action type
        expense // payload
    });

};

export default addExpense;