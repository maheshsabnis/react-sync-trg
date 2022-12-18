// 1. Saga middleware must hev following
// a. There should be two generator functions 
    //one for input actions and other for output actions
// b. there should be only one root-saga export that will take care of managing  
// execution of all generator functions
// c. this root-saga will be loaded at redux store to monitor all actions'

 
import {call, put, takeLatest, all} from 'redux-saga/effects';

import { ExpensesCloudHttpService } from '../../services/expensesCloudHttpService';

// local functions to access metod from servce and resolve promise object
function readExpenses(){
    let serv = new ExpensesCloudHttpService();
    // make call to async methode from service and resolve promise object
    const response = serv.getExpenses().then((result)=>result.data);
    // resolve and return
    return Promise.resolve(response); 
}

function writeExpense(expense){
    let serv = new ExpensesCloudHttpService();
    const response = serv.postExpenses(expense).then((result)=>result.data);
    return Promise.resolve(response);
}


function* outputGetExpensesSuccessAction(){
    try {
        // call the method that provides a resolved promise object
        const response = yield call(readExpenses);
        console.log(`The expenses details in saga ${JSON.stringify(response)}`);
        // dispatch output action
        yield put({
            type: 'GET_EXPENSES_SUCCESS',
            expenses: response,
            message: 'Success'
        });
    }catch(ex){
        // dispatch error action
        yield put({
            type: 'GET_EXPENSES_FAILED',
            message: 'Failed'
        });
    }
} 
function* inputGetExpensesAction(){
    // lets listen to input action and link thatn with output action
    yield takeLatest('GET_EXPENSES',outputGetExpensesSuccessAction);
}
// action is the action object return by the inout action 
function* outputAddExpenseSuccessAction(action){
    console.log('Output Add Saga');
  try {
    console.log(`Received data from action method to saga is 
        ${JSON.stringify( action.expense)}`);
    // call the method and pass parameter to it
    const response = yield call(writeExpense, action.expense);
    yield put({
        type:'ADD_EXPENSE_SUCCESS',
        expense:response
    });
  }catch(ex){
    yield put({
        type: 'ADD_EXPENSE_FAILED',
        message: 'Failed'
    });
  }  
} 
function* inputAddExpenseAction(){
    console.log('Input Add Saga');
    // lets listen to input action and link thatn with output action
    // the takeLatest is also capable of reading action type
    // that is the payload return by the input action
    // in thisn case its is 'expense' object 
    // Refer: addExpense() method from action.js
    yield takeLatest('ADD_EXPENSE', outputAddExpenseSuccessAction);
}


// a root-saga function that will be exported

export default function* rootSaga(){
    // load all input action monitors
    yield all([inputAddExpenseAction(), inputGetExpensesAction()]);
}