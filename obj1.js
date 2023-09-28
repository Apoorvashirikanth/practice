function count(obj){
    let c =0; 
    for (let o of Object.keys(obj)){
        c++;
    }
    return c;
}

let user = {
    name: 'John',
    age: 30
  };
  
  console.log( count(user) ); 