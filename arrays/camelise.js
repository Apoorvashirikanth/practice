function camelize(str){
    let index = str.indexOf("-");
    let arr = str.split("-");
    let newArr = arr.join("");
    let upper = newArr[index].toUpperCase();
    
}

console.log(camelize("background-color"));