// write
export const addExpense=(expense)=>{
    // some logic here, this MUST be sync logic 
    expense.ExpenseDetails = expense.ExpenseDetails.toUpperCase();     
    console.log(`Data in Actions ${JSON.stringify(expense)}`);
    return ({
        type:'ADD_EXPENSE',  
        expense  
    });

};
// Read
export  const getExpenses=()=>{
    return {
        type: 'GET_EXPENSES'
    };
}