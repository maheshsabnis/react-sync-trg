import React, {useState} from "react";

const ParentPropsComponent=(props)=>{
    // define a state
    const [information, setInfo] = useState('');
  return(
        <div className="container">
            <div className="form-group">
                <label>Enter Message</label>
                {/* Lets bind  information to value of input element */}
                <input type="text" value={information}
                  onChange={(evt)=>setInfo(evt.target.value)}/>
                
            </div>
            <strong>
                The Value Received from React-Root : {props.message}
            </strong>
            <hr/>
            {/* Binding the state property to the 'props' of the component */}
            <ChildPropsComponent info={information}
             msg={props.message}/>
        </div>
  );
};


const ChildPropsComponent=(props)=>{
    return (
        <div className="alert alert-primary">
              <strong>
                The Received value: {props.info} and message is :{props.msg}
              </strong>  
        </div>
    );
};

export default ParentPropsComponent;