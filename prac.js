"use strict"
// ----------------ARRAYS-----------
let mixed=[1,2,3,'strings',null,undefined];
console.log(mixed)
console.log(Array.isArray(mixed))
mixed.push('yoyy')
mixed.pop()
mixed.unshift('banana')
mixed.shift();
let arr=mixed.slice(0);
let arr2=[].concat(arr)
let arr3=[...arr]
arr.pop()
console.log(mixed);
console.log(arr);
console.log(arr2);
// --------
// for of loop
for(let i of mixed){
console.log(i);
}
// for in loops
for(let i in mixed){
    console.log(i)
}
// --===
let [one,two]=mixed;
console.log(one)
console.log(two)