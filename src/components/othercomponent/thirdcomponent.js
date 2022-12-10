import React from "react";

const ThirdComponent=()=>{
    return (
        <div className="container">
            <strong>
                The Third Component
            </strong>
            <hr/>
            <FourthComponent/>
        </div>
    );
};

// The Component the is a placeholder for inline HTML

const FourthComponent=()=>(
    <div className="alert alert-warning">
        <strong>
            The Fourth Component
        </strong>
    </div>
);



export default  ThirdComponent;