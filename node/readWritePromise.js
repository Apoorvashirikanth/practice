const fs = require('fs').promises;
const path = require('path');

const file = async () => {
    try{
        const data = await fs.readFile(path.join(__dirname,'reply.txt'),'utf8');
        console.log(data);
    }
    catch(err){
        console.error(err);
    }
}

file();