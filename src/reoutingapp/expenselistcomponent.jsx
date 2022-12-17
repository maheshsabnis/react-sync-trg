 
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { ExpensesHttpService } from "./../services/expensesHttpService";

const ExpensesListComponent=()=>{
    const [expenses, updateExpenses] = useState([]);
    const [statusMessage,setMessage] = useState('');
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

    return (
        <div className="container">
            <h2>List of Expenses</h2>
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
                                  <td>
                                    <button className="btn btn-warning">
                                        <Link to={`/edit/${record.PaidTo}`}>Edit</Link>
                                    </button>
                                  </td>
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

export default ExpensesListComponent;