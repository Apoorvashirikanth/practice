function count(rows,columns){
    if(rows==1 || columns==1){
        return 1;
    }

    var left=count(rows-1,columns);
    var right=count(rows,columns-1);
    return left+right;
}

function path(p,r,c){
    if(r==1 && c==1){
        console.log(p);
        return;
    }
    if(r>1){
         path(p+"D",r-1,c);
    }
    
    if(c>1){
         path(p+"R",r,c-1);
    }

    
}

console.log("Number of ways you can finish the maze: "+count(3,3));
console.log(path("",3,3));