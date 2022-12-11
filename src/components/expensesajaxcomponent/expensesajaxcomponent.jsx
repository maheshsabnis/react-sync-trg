import React, {useEffect, useState} from "react";
import { ExpensesHttpService } from "../../services/expensesHttpService";

const ExpensesAjaxComponent=()=>{
// define state and an instance of the service

const [expenses, updateExpenses] = useState([]);
const [statusMessage, setMessage] = useState('');

let serv  =new ExpensesHttpService();

useEffect(()=>{
    serv.getExpenses()
        .then((response)=>{
            updateExpenses(response.data);
            setMessage('Data is received successfully');
        }).catch((error)=>{
            setMessage(error);
        });
}, []); // dependency list

const save=()=>{
    serv.postExpenses({
        ExpensesDetails: 'Book Purchase',
        ExpensesAmount:8000,
        PaidTo: 'Mehata Publications'
    }).then((response)=>{
        updateExpenses(response.data);
        setMessage('Data is received successfully');
    }).catch((error)=>{
        setMessage(error);
    });
};



 return (
    <div className="container">
        <h2>Performing AJAX Calls using useEffect</h2>
        <div className="form-group">
            <button className="btn btn-primary">Get</button>
            <button className="btn btn-success"
            onClick={save}>Post</button>
        </div>
        <hr/>
        <table className="table table-striped table-bordered" >
            <thead>
                <tr>
                    <th>Expenses Details</th>
                    <th>Expenses Amount</th>
                    <th>Paid To</th>
                </tr>
            </thead>
            <tbody>
                {
                    expenses.map((record,index)=>(
                        <tr key={index}>
                              <td>{record.ExpensesDetails}</td>  
                              <td>{record.ExpensesAmount}</td>
                              <td>{record.PaidTo}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
        <hr/>
        <div className="alert alert-warning">
            <strong>
                {statusMessage}
            </strong>
        </div>
    </div>
 );    

};

export default ExpensesAjaxComponent;