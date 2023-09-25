function truncate(str, maxlength){
    let newStr = str;

    if(str.length > maxlength){
        newStr = str.slice(0,maxlength-1)+"…";
    }

    return newStr;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20))