import React, {useState} from "react";
import {ExpensesHeaders, PaymentModes} from './../../models/constants';
import {Expenses} from './../../models/expenses';
import SelectComponent from "./../../components/reusablecomponent/selectcomponent";
const AddExpensesComponent=(props)=>{
   // define state
   const [expense, setExpense] = useState({
    ExpenseId:0, ExpenseDetails:'',PaidTo:'',PaidAmount:0,ExpensesHeader:'',PaymentMode:''
   });
    
   // lets locally store array values
   let expensesHeaders= ExpensesHeaders;
   let paymentModes  = PaymentModes;
   let exp = new Expenses();

   const clear=()=>{
    // Initialise the State
     setExpense({
        ExpenseId:0, ExpenseDetails:'',PaidTo:'',
        PaidAmount:0,ExpensesHeader:'',PaymentMode:''
       })
   };
   // save new expense in Array
   const save=()=>{
     // the 'save()' methdo will be invoked on 'onClick' event
     // this will make sure that the AddExpenses() function will be sunscribed
     // by the parent of the current component
     props.AddExpenses(expense);
  };


   const getSelectedExpense=(record)=>{
    setExpense(record);
   }

    return(
        <div className="container">
            <h2>The Expenses Management App</h2>
            <div className="form-group">
                <label>Expenses Id</label>
                <input type="text" className="form-control"
                   value={expense.ExpenseId}
                   onChange={(evt)=>setExpense({...expense, 
                    ExpenseId:parseInt(evt.target.value)})}
                />
            </div>
            <div className="form-group">
                <label>Expenses Details</label>
                <input type="text" className="form-control"
                 value={expense.ExpenseDetails}
                 onChange={(evt)=>setExpense({...expense, 
                  ExpenseDetails:evt.target.value})}/>
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