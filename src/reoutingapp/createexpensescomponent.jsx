 
import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
const CreateExpensesComponent=()=>{

    const [expense, setExpense] = useState({
        ExpenseDetails:'',PaidTo:'',ExpensesAmount:0}); 
 
        // define an object for useNavigate()
        let navigate = useNavigate();
        // On save click navigate back to the expenses list
const save=()=>{
    // navigate to the root component
    // here it is 'LayoutComponent'
    // and 'LayoutComponent' is having the landing component 
    // aka index is ExpenseListComponent
    navigate("/");
};

   const clear=()=>{
    setExpense({
        ExpenseDetails:'',PaidTo:'',ExpensesAmount:0});
   };


   
    return(
        <div className="container">
            <h2>The New Expenses Record</h2>
            
            <div className="form-group">
                <label>Expenses Details</label>
                <input type="text" className="form-control"
                 value={expense.ExpenseDetails}
                 onChange={(evt)=>setExpense({...expense, 
                  ExpenseDetails:evt.target.value})}/>
            </div>    
            <div className="form-group">
                <label>Expenses Amount</label>
                <input type="text" className="form-control"
                 value={expense.PaidAmount}
                 onChange={(evt)=>setExpense({...expense, 
                  PaidAmount:parseInt(evt.target.value)})}
                />
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
               <button className="btn btn-warning" onClick={clear}>Clear</button>
               <button className="btn btn-primary" onClick={save}>Save</button>
            </div>
             <hr/>
             
        </div>
    );


};

export default CreateExpensesComponent;