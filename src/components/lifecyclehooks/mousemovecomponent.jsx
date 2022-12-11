import React, { Fragment, useState, useEffect } from "react";

const MouseMoveComponent=()=>{

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const grabMouswPositions=(evt)=>{
        setX(evt.clientX);
        setY(evt.clientY);
        console.log('Still UnMounted Component is executing with Global Event');
        console.log(` X-position ${x} and Y-position ${y}`);
    };
    
    useEffect(()=>{
        // Mounting 'componentDidMount()'
        window.addEventListener('mousemove', grabMouswPositions);
        return(()=>{
            // Unmounting process 'componentWillUnmount()'
             window.removeEventListener('mousemove', grabMouswPositions);   
        });
    });



    return(
        <Fragment>
            <h3>Detect Mouse Movement Coordinates on browser </h3>
            <Fragment>
                <strong>
                    X-position : {x} &&  Y-position : {y}
                </strong>
            </Fragment>
        </Fragment>
    );

};

export default MouseMoveComponent;