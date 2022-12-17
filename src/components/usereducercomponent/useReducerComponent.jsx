import React, {useReducer, useEffect} from "react";
import axios from 'axios';

// 1. Create a Complex State Object
const initialState = {
    data:[], // actual state with intial value as empty array
    loading:'', // the transition based on actions those will be dispatched
    error: '' // the error proeprty that will show error is state update failed
};
// 2. Create a reducer function, a PURE JS Function with following paramterers
// A. state
// B. action
// This will monitor the state update based on the action types
// 2.a. initial Action that will be dispatched
// 2.b. Action, that will be dispatched whr state update fails
// 2.c. Action, that will be dispatehed when the state update is successful

function reducer(state, action){
    switch(action.type){
        case 'DATA_FETCH_STARTED':
            // return an initial value of state as it 
            return {...state, loading:'Call is initialted', error:''};
        case 'DATA_FETCH_FAILED':
            // return error message for fail 
            return {...state, loading:'Loading is failed with error', error:`Error Occurred ${action.payload}`};    
        case 'DATA_FETCH_SUCCESSFUL':
            // return actual data for success
            return {...state, loading:'Data is received successfuly', error:'', data:action.payload}; 
        default:
            return state;                
    }
}



// 3. A Custom Hook that will use the useReducer hook (Optional)
const useAsyncStateUpdate=(url)=>{
    // BAsed on the execution of the 'reducer' function, the 'useReducer()' will
    // update the ststate property, here in this case it is 'data'
    const [data, dispatch] = useReducer(reducer,initialState);

    // AJAX Call that will be responsible to dispatch actions
    useEffect(()=>{
        // Start initial Dispatch
        dispatch({type: 'DATA_FETCH_STARTED'});
        axios.get(url)
            .then((resp)=>{
                // Dispatch the Success
                dispatch({type: 'DATA_FETCH_SUCCESSFUL',payload:resp.data});
            })
            .catch((error)=>{
                // Dispatch the Error
                dispatch({type: 'DATA_FETCH_FAILED',payload:error.message});
            });
    },[]);

    return data;
};

// 4. A Component that will use the custom hook
const  UseReducerComponent=()=>{
    const state = useAsyncStateUpdate('https://expensesservicemaui.azurewebsites.net/api/expenses');

    if(state === undefined){
        return (
            <div className="alert alert-danger">
                <strong>
                    No data to display
                </strong>
            </div>
        );
    } else {
        return(
            <div className="alert alert-primary">
                {
                    JSON.stringify(state)
                }
            </div>
        );
    }
};

export default UseReducerComponent;


