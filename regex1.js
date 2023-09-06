//program to count numbers between 0 and 9 in a given string
function countNumbers(text,pattern){
    let result = '';
    
    if(!text.match(pattern)){
        return 0;
    }
    else{
    result = text.match(pattern);
    return result.length;
    }
}

console.log(countNumbers("321321dsadsa930-29d132b13a",/[0-9]/g));
console.log(countNumbers("this is so wonderful",/[0-9]/g));
console.log(countNumbers("this is so 1234",/[0-9]/g));