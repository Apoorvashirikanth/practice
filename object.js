let user = {
    name: "apoorva",
    age: 25,
    likes: "javascript",
};

for(key in user){
    console.log(key);
    console.log(user[key]);
}

user.name = "ben";

console.log("new name: "+user.name);