import React, {Suspense} from 'react';
import FallbackComponent from './fallbackcomponent';
// The compoenent that we want to load lazily
const RuntimeComponent = React.lazy(()=> import('./../usereducercomponent/useReducerComponent')); 
// The Actual Container / Parent Component that wants to load the component
// Lazily
const LazyComponent=()=>{
    return(
        <div className='container'>
            {/* Till the RuntimeComponent is not loaded, keep shown message */}
            <Suspense fallback={<FallbackComponent/>}>
                <section>
                  <RuntimeComponent/>  
                </section>
                 
            </Suspense>
        </div>
    );
};

export default LazyComponent;