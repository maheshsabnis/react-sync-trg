import React, { Fragment, useState } from "react";

const CounterChildComponent=()=>{
    let [counter, updateConter] = useState(0);

    const updateCounterValue=()=>{
        updateConter(counter++);
    };

    const componentUI=()=>{
        return (
            <div className="container">
                <h3>The Counter Child Component</h3>
                <strong>
                    Current Value of the  Counter : {counter}
                </strong>
                <br/>
                <button onClick={updateCounterValue}>Update Counter</button>
            </div>
        );
    };

    const fallbackUI=(ex)=>{
        return (
        <div className="container">
        <h3>The Counter Child Component</h3>
        <strong>
           Error Occurred : {ex.message}
        </strong>
        
    </div>
    );
    };

    try {
        if(counter > 10)
            throw new Error("You have reached to max click");
        else {
            return componentUI();
        }    
    }catch(ex){
        return fallbackUI(ex);
    } 

    
};

const ContainerComponent=()=>{
    return (
        <Fragment>
            <h3>The Container Component that will have various children</h3>
            <div className="container">
                <CounterChildComponent></CounterChildComponent>
            </div>
            <hr/>
            <h4>
                I am still with Container Component
            </h4>
            <button onClick={()=>{alert("Container Component");}}>Container Component</button>
        </Fragment>
    );
};

export default ContainerComponent;