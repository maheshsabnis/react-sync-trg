// 1. Lets use the 'useContext' to subscribe to the DataContext
// object 
import React, {useContext} from "react";
// 2. Import the DataContext
import {DataContext} from '../DataContext'; 

const SelectContextEventComponent=()=>{

   // 3. Subscribe to the Context
   let subscription = useContext(DataContext);  
   
   let dataSource = subscription[Object.keys(subscription)[0]];
   
   let callback = subscription[Object.keys(subscription)[1]];
   

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
          onChange={(evt)=>callback(evt.target.value)}
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

export default SelectContextEventComponent;