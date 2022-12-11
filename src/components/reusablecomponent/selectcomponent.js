import React from "react";

const SelectComponent=(props)=>{

     const handleChange=(evt)=>{
        // create a props function object for this
        // component that will be used by its parent

        props.onSelectionChanged(evt.target.value);

     };


    if(props.dataSource === undefined || props.dataSource === null || props.dataSource.length ===0){
         return (<div className="alert alert-danger">
            <strong>
                No data to display
            </strong>
         </div>);   
    }
    else { 
    return(
        <select className="form-control"
           value={props.valueProperty}
            onChange={handleChange}>
            <option>Select your choice</option>
            {
                 props.dataSource.map((val,idx)=>(
                    <option key={idx} value={val}>{val}</option>
                 ))
            }
           </select>
        );
    }
};

export default SelectComponent;