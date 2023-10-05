import React from 'react'

// function Greet(){
//     return <h1> Hello Apoorva</h1>
// }

// const Greet = () => <h1> hello a</h1>

//props

const Greet = (props) => {
    return (
    <div>
        <h1> 
            hey { props.name } from { props.country} 
        </h1>
        {props.children}
    </div>
    )
}

export default Greet
        
