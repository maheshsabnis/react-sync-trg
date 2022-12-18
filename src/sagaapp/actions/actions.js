// write
export const addExpense=(expense)=>{
    // some logic here, this MUST be sync logic 
    expense.ExpensesDetails = expense.ExpensesDetails.toUpperCase();     
    console.log(`Data in Actions ${JSON.stringify(expense)}`);
    return ({
        type:'ADD_EXPENSE',  
        expense  
    });

};
// Read
export  const getExpenses=()=>{
    console.log('ger action');
    return {
        type: 'GET_EXPENSES'
    };
}