import React from "react";
import DataGridComponent from "../reusablecomponent/datagridcomponent";

const StockComponent=(props)=>{
    return(
        <div className="container">
            <h1>Stcok Details</h1>
            <DataGridComponent dataSource={props.data}/>
        </div>
    );
};

export default StockComponent;

