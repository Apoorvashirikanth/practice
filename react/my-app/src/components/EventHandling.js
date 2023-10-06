import React from "react";
import { useState } from "react";

function EventHandling(){
    const [val, newVal] = useState('A')
    function updateAlphabet(){
        newVal(String.fromCharCode(val.charCodeAt(0)+1))   // incrementing alphabets 
    }
    return(
        <div>
            <h1> counter: {val}</h1>
            <button onClick = {updateAlphabet}> Update </button>
        </div>
    )
}

export default EventHandling