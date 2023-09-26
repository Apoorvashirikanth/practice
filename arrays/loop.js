let str = "apoorva";

for ( let char of str){ //for..of for strings
    console.log(char);
}

let obj = {
    id: 1,
    name: "apoorva",
};

for( let item in obj){   //for..in for obj
    console.log(obj.valueOf(item));
}