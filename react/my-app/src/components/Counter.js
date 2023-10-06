import React from "react";
import { useState } from "react";

function Counter() {
    const [value, newValue] = useState(10)
    function increment(){
        newValue(value+1)
    }
    return(
        <div>
            <h1> Counter:  {value} </h1>
            <button onClick={increment}> increment </button>
        </div>
    )
}

export default Counter