import React from "react";

// importing the Routing Object Model

import {Route, Routes} from 'react-router-dom';
import CreateExpensesComponent from "./createexpensescomponent";
import EditExpensesComponent from "./editexpensescomponent";
import ExpensesListComponent from "./expenselistcomponent";
import LayoutComponent from "./layoutcomponent";
import NotfoundComponent from "./notfoundcomponent";

const MainRoutingComponent=()=>{

    return(
        <div className="container">
            <Routes>
                <Route path="/" element={<LayoutComponent/>}>
                    {/* index means that bthis componennt will be mounted
                      under the layout when it is rendered
                    */}
                    <Route index element={<ExpensesListComponent/>}/>
                    <Route path="/create" element={<CreateExpensesComponent/>}/>
                    {/* The Route with Parameter Expression */}
                    <Route path="/edit/:paidto" element={<EditExpensesComponent/>}/>
                    <Route path="*" element={<NotfoundComponent/>}/>
                </Route>
                
            </Routes>
        </div>
    );
};

export default MainRoutingComponent;