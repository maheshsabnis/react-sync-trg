import React, { Component, Fragment, useState } from "react";

class ErrorBoundaryComponent extends Component{
    constructor(props){
        super(props);

        // state object for storing error message
        this.state ={
            errorMessage:''
        };
    }

    static getDerivedStateFromError(error){
            // update the state property of the component
        return {
            errorMessage:error.toString()
        }
    }

    // Handle and listen to error for any child ion DOM Tree
    componentDidCatch=(error, log)=>{
        console.log(`Error is ${error.toString(), log.compoentStack}`);
    }
// create a fallback UI
    render(){
            if(this.state.errorMessage){
                return (
                    <div className="alert alerrt-danger">
                        {this.state.errorMessage}
                    </div>
                );
            }else {
                // continue executing chidren of the current component
                return this.props.children;    
            }
    }
}

const MyCounterChildComponent=()=>{
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

    

  
        if(counter > 10)
            throw new Error("You have reached to max click");
        else {
            return componentUI();
        }    
    

    
};

const MyContainerErrorBoundaryComponent=()=>{
    return (
        <Fragment>
            <h3>The Container Component that will have various children</h3>
            <div className="container">
                <ErrorBoundaryComponent>
                      <MyCounterChildComponent></MyCounterChildComponent>
                </ErrorBoundaryComponent>
               
            </div>
            <hr/>
            <h4>
                I am still with Container Component
            </h4>
            <button onClick={()=>{alert("Container Component");}}>Container Component</button>
        </Fragment>
    );
};

export default MyContainerErrorBoundaryComponent;