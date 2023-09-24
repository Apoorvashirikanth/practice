let arr = [1,2,3,4,5];
console.log("array before reversing: "+arr);
let reversedArr = [];
let len = arr.length;

for (let i=0; i<=len-1; i++){
    let ele = arr.pop();
    reversedArr.push(ele);
}

console.log("array after reversing: " + reversedArr);




