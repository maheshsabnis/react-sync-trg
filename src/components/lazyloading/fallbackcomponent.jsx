import React from "react";

const FallbackComponent=()=>{
    console.log('Waiting.....');
    return(
        <div className="container">
            <strong>Waiting for Component to load....</strong>
        </div>
    );
};

export default FallbackComponent;