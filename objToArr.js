let user = {
    name: "apoorva",
    id: 1
}

let arr = Object.entries(user);

console.log(arr[0]);
console.log(arr[1]);

for(let k of arr.values()){
    console.log(k);
}

console.log(Object.keys(user));

let newObj = Object.fromEntries(arr);
console.log(newObj);