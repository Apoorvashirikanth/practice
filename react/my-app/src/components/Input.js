import React from "react";
import { useState } from "react";

const Input = () => {
    const [txt, newTxt] = useState('initial text');

    function updateText(){
        const updatedTxt = document.getElementById("my-id").value;
        newTxt(updatedTxt)
        console.log(txt)
        document.getElementById("my-para").innerText = updateText;
    }

    return(
        <div>
        
            <label> name:</label>
                
            <input  id="my-id"
                    reqired
                    value={txt}/>
            <button onClick={updateText()}>update</button>

            <p id="my-para"> {txt} </p>
            
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
          <p>{txt}</p>
        </div>
    )
}

export default Input