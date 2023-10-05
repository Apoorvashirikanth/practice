import React from "react";

// const Hello = () => {
//     return (
//         <div>
//             <h1> using JSX </h1>
//         </div>
            
//     )
// }

const Hello = () => { 
        return React.createElement('div', null, 'Without JSX')
}

export default Hello