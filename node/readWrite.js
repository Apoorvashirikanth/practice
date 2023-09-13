const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'starter.txt'),'utf8', (err,data) => {
    if(err){
        console.log(error);
    }
    console.log(data);
});
// console.log(__filename);
// console.log(__dirname);
//console.log(path.join(__dirname,'starter.txt'));

// fs.writeFile(path.join(__dirname,'reply.txt'),'this file is created by a bot',(err)=>{
//     if(err) 
//     console.log("error");
// });

fs.writeFile(path.join(__dirname,'reply.txt'),'this file is created by a bot',(err)=>{
    if(err) 
    console.log("error");

    fs.appendFile(path.join(__dirname,'reply.txt'),'\n\nappended by bot',(err)=>{
        if(err) {console.log("error");}
        console.log("append complete");
    })
});
