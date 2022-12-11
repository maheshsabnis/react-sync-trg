import React, {Fragment, useState} from "react";
import MouseMoveComponent from "./mousemovecomponent";

const ToggleComponent=()=>{
   
    const [show, canShow] = useState(true);

    return (
        <Fragment>
            <h2>The Toggle Component</h2>
            <button onClick={()=>{
                canShow(!show)
            }}>
                Toggle
            </button>
            {
                show && <MouseMoveComponent></MouseMoveComponent>
            }
            <Fragment>
                <strong>
                    Currently the ToggleCOmpoent is loaded
                </strong>
            </Fragment>
        </Fragment>
    );

};

export default ToggleComponent;