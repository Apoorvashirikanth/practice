let user = [
    {id:1 , name:"apoorva"},
    {id:2 , name:"ben"},
    {id:3 , name:"jay"},
    {id:1 , name:"suzy"},
];

// let u = user.find(item => item.id == 1);
// console.log(u.name);

// let usr = user.filter(item => item.id == 1);
// console.log(usr.name);

let usr = user.filter(item => {
    if(item.id == 1){
    console.log(item.name);
    }
});
