var myArr=[1, "GLA", true];
// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);

// console.log(myArr.length);

console.log(myArr[myArr.length - 1]);

myArr.push("New Element");
console.log(myArr[myArr.length - 1]);
myArr.pop();
console.log(myArr[myArr.length - 1]);

myArr.unshift("First Element");
console.log(myArr[0]);