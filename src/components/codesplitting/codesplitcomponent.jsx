import React, {useState} from "react";

const CodeSplitComponent=()=>{
    const [length, setLength] = useState(0);
    let str = 'React.js Code Splitting Demo';

    const loadModule=()=>{
        // import the module asynchronously
        import("./stringopemodule")
            .then((module)=>{
                // module is an exported file a JS module
                // Lets create an instance of the class
                // from the module
                let obj = new module.StringOperations();
                
                setLength(obj.getLength(str));
            })
            .catch((error)=>{
                console.log(`There is an error while loading module ${error.message}`);
            }); 
    };

    return (
        <div>
            <h3>The React.js Code-Splitting</h3>
            <strong>
                Length of {str} is = {length}
            </strong>
            <hr/>
            <button className="btn btn-primary"
             onClick={loadModule}>Get Length</button>
        </div>
    );
};

export default CodeSplitComponent;