import {combineReducers} from 'redux';
export const addExpensesReducer=(state,action)=>{
    console.log(`Add Reducer ${JSON.stringify(state)}`);
    switch(action.type){
        case 'ADD_EXPENSE_SUCCESS':
            return{
                expense:action.expense // receive payload from the output action
            }
        default:
             return state;       
    }
};
// initially state is empty
export const listExpensesReducer=(state=[],action)=>{
    console.log(`List Reducer ${JSON.stringify(state)}`);
    switch(action.type){
        case 'ADD_EXPENSE_SUCCESS':
            // the current reducer function is invoking the addExpensesReducer() function
            // so that newly added expense can be received and mutated into the state array 
            // and update the store using this updated array
            return [...state, addExpensesReducer(undefined, action)];
        default:
             return state;       
    }
};

// create a combine reducer that will be a one-single-reducer-object for all actions
// and this object will be responsible to listen all actions and accrodingly update the store
// Note: Only listExpensesReducer reducer funciton is passed here because this is invoking 
// addExpensesReducer function already in it
// when the component wants to query data from store, it can use the reducer name 
// as input parameter to the useSelector() hook
const reducers = combineReducers({listExpensesReducer});

// export
export default reducers;
