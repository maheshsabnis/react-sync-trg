import React from "react";
import ThirdComponent from "../othercomponent/thirdcomponent";
function FirstComponent(){
    return (
        <div className="container">
            <strong>
                The First Component
            </strong>
            <hr/>
            <SecondComponent/>
            <hr/>
            <ThirdComponent/>
        </div>
    );
};


const SecondComponent=()=>{
    return (
        <div className="alert alert-danger">
            <strong>
                The Second Component
            </strong>
        </div> 
    );
};

export default FirstComponent;