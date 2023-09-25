let str = "as a has apoorva at home";
let pos=0;

while(true){
    let found = str.indexOf("a",pos);
    
    pos = found +1;
    if(found == -1){
        break;
    }
    console.log(found);
}

