import React from "react";

const List = () => {
    const Products = ["laptop", "phone", "Television"];
    return (
    <div>
       <h1>
        {Products.map((product) => <h1>{product}</h1>)}
        </h1> 
    </div>
    )
}

export default List