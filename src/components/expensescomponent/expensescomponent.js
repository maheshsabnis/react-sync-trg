import React, {useState} from "react";
import {ExpensesHeaders, PaymentModes} from './../../models/constants';
import {Expenses} from './../../models/expenses';
const ExpensesComponent=()=>{
   // define state
   const [expense, setExpense] = useState({
    ExpenseId:0, ExpenseDetails:'',PaidTo:'',PaidAmount:0,ExpensesHeader:'',PaymentMode:''
   });
   const [expenses, updateExpenses] = useState([]);
   // lets locally store array values
   let expensesHeaders = ExpensesHeaders;
   let paymentModes = PaymentModes;
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
    updateExpenses([...expenses, expense]);
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
                <select className="form-control"
                 value={expense.ExpensesHeader}
                 onChange={(evt)=>setExpense({...expense, 
                  ExpensesHeader:evt.target.value})}
                >
                    <option>Select Expenses Header</option>
                    {
                        expensesHeaders.map((eh,i)=>(
                            <option key={i} value={eh}>{eh}</option>
                        ))
                    }    

                </select>
            </div>
            <div className="form-group">
                <label>Payment Mode</label>
                <select className="form-control"
                 value={expense.PaymentMode}
                 onChange={(evt)=>setExpense({...expense, 
                  PaymentMode:evt.target.value})}
                >
                    <option>Select Payment Mode</option>
                    {
                        paymentModes.map((pm,i)=>(
                            <option key={i} value={pm}>{pm}</option>
                        ))
                    }  

                </select>
            </div>
            <div className="form-group">
               <button className="btn btn-warning" onClick={clear}>Clear</button>
               <button className="btn btn-primary" onClick={save}>Save</button>
            </div>
             <hr/>
             {/* {JSON.stringify(expenses)} */}
             <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                       {
                         Object.keys(exp).map((header,index)=>(
                            <th key={index}>{header}</th>
                         ))
                       }     
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map((e,i)=>(
                            <tr key={i} onClick={()=>getSelectedExpense(e)}>
                                {
                                    Object.keys(e).map((header,index)=>(
                                        <th key={index}>{e[header]}</th>
                             ))
                       }  
                            </tr>
                        ))
                    }
                </tbody>
             </table>
        </div>
    );
};

export default ExpensesComponent;