import React from "react";

// const List = () => {
//     const Products = ["laptop", "phone", "Television"];
//     return (
//     <div>
//        <h1>
//         {Products.map((product) => <h1>{product}</h1>)}
//         </h1> 
//     </div>
//     )
// }

const List = () => {
    const Products = [
        {id: 1, name: "Laptop", price: 20},
        {id: 2, name: "Phone", price: 20},
        {id: 3, name: "Laptop", price: 50}
    ];

    return (
        <div>
            {Products.map((prod) => <h1 key={prod.id}>{prod.name}: price{prod.price}</h1>
        )}
        </div>
    )
}

export default List