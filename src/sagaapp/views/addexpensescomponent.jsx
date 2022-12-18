import React, {useState} from "react";
import {useDispatch}  from 'react-redux';
import {ExpensesHeaders, PaymentModes} from './../../models/constants';
import {Expenses} from './../../models/expenses';
import SelectComponent from "./../../components/reusablecomponent/selectcomponent";

import { addExpense } from "../actions/actions";


const AddExpensesComponent=(props)=>{
   // define state
   const [expense, setExpense] = useState({
    ExpensesId:0, ExpensesDetails:'',PaidTo:'',PaidAmount:0,
    ExpensesHeader:'',PaymentMode:''
   });
    
   // lets locally store array values
   let expensesHeaders= ExpensesHeaders;
   let paymentModes  = PaymentModes;
   let exp = new Expenses();

   // declare dispatch object

   const dispatch = useDispatch();


   const clear=()=>{
    // Initialise the State
     setExpense({
        ExpensesId:0, ExpensesDetails:'',PaidTo:'',PaidAmount:0,
        ExpensesHeader:'',PaymentMode:''
       })
   };
   // save new expense in Array
   const save=()=>{
       // dispatch the action
       dispatch(addExpense(expense)); 
  };


    

    return(
        <div className="container">
            <h2>The Expenses Management App</h2>
            <div className="form-group">
                <label>Expenses Id</label>
                <input type="text" className="form-control"
                   value={expense.ExpensesId}
                   onChange={(evt)=>setExpense({...expense, 
                    ExpensesId:parseInt(evt.target.value)})}
                />
            </div>
            <div className="form-group">
                <label>Expenses Details</label>
                <input type="text" className="form-control"
                 value={expense.ExpensesDetails}
                 onChange={(evt)=>setExpense({...expense, 
                  ExpensesDetails:evt.target.value})}/>
            </div>    
            <div className="form-group">
                <label>Paid To</label>
                <input type="text" className="form-control"
                 value={expense.PaidTo}
                 onChange={(evt)=>setExpense({...expense, 
                  PaidTo:evt.target.value})}
                />
            </div>
            <div className="form-group">
                <label>Paid Amount</label>
                <input type="text" className="form-control"
                 value={expense.PaidAmount}
                 onChange={(evt)=>setExpense({...expense, 
                  PaidAmount:parseInt(evt.target.value)})}
                />
            </div>
            <div className="form-group">
                <label>Expenses Header</label>
                
                <SelectComponent dataSource={expensesHeaders}
                 valueProperty={expense.ExpensesHeader}
                 onSelectionChanged={(val)=>setExpense({...expense, ExpensesHeader:val})}/>
            </div>
            <div className="form-group">
                <label>Payment Mode</label>
                 
                <SelectComponent dataSource={paymentModes}
                 valueProperty={expense.PaymentMode}
                 onSelectionChanged={(val)=>setExpense({...expense, PaymentMode:val})}
                 />
            </div>
            <div className="form-group">
               <button className="btn btn-warning" onClick={clear}>Clear</button>
               <button className="btn btn-primary" onClick={save}>Save</button>
            </div>
             <hr/>
        </div>
    );
};

export default AddExpensesComponent;