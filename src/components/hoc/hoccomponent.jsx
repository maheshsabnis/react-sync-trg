import React, { Component } from "react";

// ActualComponent: The Component that is to be modified
// paramsProps: Any additional properties those are probably used
// for custom UI creation
// paramsProps, coukd be an actual data that is needed by the component
const HocComponent=(ActualComponent, dataProps, additionalProps)=>{
    return class extends Component {
        constructor(props){
            super(props);
            // there may be a local state data
            this.state = {
                localState: dataProps
            };
        }
        render(){

            if(additionalProps !== undefined){
                return (
                <div className="container">
                    <h1>The COmponent Generation using Higher-Order-Component</h1>
                    <ActualComponent data={this.state.localState} canDelete={additionalProps.canDelete}></ActualComponent>
                </div>
                );
            } else {
                return (
                    <div className="container">
                        <h1>The COmponent Generation using Higher-Order-Component</h1>
                        <ActualComponent data={this.state.localState}></ActualComponent>
                    </div>
                );
            }

           
          
        }
    }
};

export default HocComponent;