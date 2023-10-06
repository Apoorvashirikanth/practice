import React from "react";
import { useState } from "react";

const Message = (state) => {
    const [name, setName] = useState("andrew");
    
    function updateName(){
        setName("peter");
    }
    return (
        <div>
            <h1> hey {name} </h1>
            <button onClick={updateName}> Update value </button>
        </div>
    )
}

export default Message