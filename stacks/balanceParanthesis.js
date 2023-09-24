let paren = "{()]}";
let stack = [];

for ( let i=0; i<paren.length; i++){
    if(paren.charAt(i) == "{" || paren.charAt(i) == "(" || paren.charAt(i) == "["){
        stack.push(paren.charAt(i));
    }
    else if(paren.charAt(i) == ")" && stack[stack.length-1] == "("){
        stack.pop();
    }
    else if(paren.charAt(i) == "}" && stack[stack.length-1] == "{"){
        stack.pop();
    }
    else if(paren.charAt(i) == "]" && stack[stack.length-1] == "["){
        stack.pop();
    }
    else{
        stack.push(paren.charAt(i));
    }
}

if(stack.length == 0){
    console.log("balanced")
}
else{
    console.log("unbalanced");
}

console.log(stack)
