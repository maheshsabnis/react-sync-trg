// one reducer function with all actions 
const reducers = (state=[], action)=>{
    switch(action.type){
        case 'GET_EXPENSES':
            return {
                    ...state, 
                    message: 'Request Initiated to read all expenses'
                   };
        case 'GET_EXPENSES_SUCCESS':
            return {
                    ...state, 
                    expenses: action.expenses, 
                    message: 'Request completed successfully'
                   };
        case 'ADD_EXPENSE':
            return {
                    ...state, 
                    message: 'Request Initiated to write new expense'
                   };   
        case 'ADD_EXPENSE_SUCCESS':
            return {
                    ...state,
                    expense:action.expense, 
                    message: 'Request  to write new expense is successful'
                   };                   
        default:
            return state;  
    }
};

export default reducers;
