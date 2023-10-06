import React from "react";
import { useState } from "react";

// const ConditionalComponent = () => {
//     const [val, setVal] = useState(false)

//     if(val){
//         return(
//             <div>
//                 <h3> green flag </h3>
//             </div>
//         )
//     }
//     else{
//     return(
//         <div>
//             <h3> red flag </h3>
//         </div>
//     )
//     }
// }

const ConditionalComponent = () => {
    const [val, setVal] = useState(true);
    let output;

    if(val){
        output = <h3> green flag </h3>
    }
    else{
        output = <h3> red flag </h3>
    }

    return <div>{output}</div>
}

export default ConditionalComponent