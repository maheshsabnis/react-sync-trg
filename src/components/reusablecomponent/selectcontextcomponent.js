// 1. Lets use the 'useContext' to subscribe to the DataContext
// object 
import React, {useContext} from "react";
// 2. Import the DataContext
import {DataContext} from './../DataContext'; 

const SelectContextComponent=()=>{

   // 3. Subscribe to the Context
   let dataSource = useContext(DataContext);  
   
   console.log(JSON.stringify(dataSource));

    if(dataSource === undefined || dataSource === null || dataSource.length ===0){
         return (<div className="alert alert-danger">
            <strong>
                No data to display
            </strong>
         </div>);   
    }
    else { 
    return(
        <select className="form-control"
         >
            <option>Select your choice</option>
            {
                 dataSource.map((val,index)=>(
                   <option key={index} value={val}>{val}</option>
                 ))
            }
           </select>
        );
    }
};

export default SelectContextComponent;