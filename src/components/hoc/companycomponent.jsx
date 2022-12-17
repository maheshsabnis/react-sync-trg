import React from "react";
import DataGridComponent from "../reusablecomponent/datagridcomponent";


const CompanyComponent=(props)=>{

    return(
        <div className="container">
            <h1>Companies Details</h1>
            <DataGridComponent dataSource={props.data} canDelete={props.canDelete}/>
        </div>
    );
};

export default CompanyComponent;

