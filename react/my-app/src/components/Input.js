import React from "react";
import { useState } from "react";

const Input = () => {
    const [txt, newTxt] = useState('initial text');

    function updateText(){
        newTxt("updated text from user")
    }

    return(
        <div>
            <label> name:</label>
                
            <input  value={txt}
                    reqired
                    onChange={(e) => newTxt(e.target.value)}/>
            <button onClick={updateText}>update</button>
            <h1> {txt} </h1>

            <label> practicing checkboxes</label>
            <input type="checkbox" />

            <div></div>
            <label> part2 </label>
            <input type="checkbox" />

            <h1>select from dropdown</h1>
            <div>
            <select>
                <option>andrew</option>
                <option>apoorva</option>
                <option>nobody</option>
            </select>
            </div>
        </div>
    )
}

export default Input