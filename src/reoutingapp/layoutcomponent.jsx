import React from "react";
import {Link, Outlet} from 'react-router-dom';
const LayoutComponent=()=>(
    <div className="container">
        <table className="table table-bordered table-striped table-dark">
            <tbody>
                <tr>
                    <td>
                        <Link to='/'>Expenses List</Link>
                    </td>
                    <td>
                        <Link to='/create'>Record New Expense</Link>
                    </td>
                </tr>
            </tbody>
        </table>
        <hr/>
        {/* The Placeholder aka container where the component in route will be mounted */}
        <Outlet/>
    </div>
);

export default LayoutComponent;