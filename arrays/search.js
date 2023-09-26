let user = [
    {id:1 , name:"apoorva"},
    {id:2 , name:"ben"},
    {id:3 , name:"jay"}
];

let u = user.find(item => item.id == 1);

console.log(u.name);