
import React, {useState} from "react";
import {useParams} from 'react-router-dom';
const EditExpensesComponent=()=>{

    const [expense, setExpense] = useState({
        ExpenseDetails:'',PaidTo:'',ExpensesAmount:0}); 
        // create a params object

        let params = useParams();
        // REad the parameter from the URL

        let paidTo = params.paidto;
        console.log(`The Received Parameter is = ${paidTo}`);
 
const save=()=>{
    
   };

   const clear=()=>{
    
   };


   
    return(
        <div className="container">
            <h2>Edit Expenses Record</h2>
            
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

export default EditExpensesComponent;