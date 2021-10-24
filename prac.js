"use strict"
// ====================================================
                //    SET
// ====================================================
const yo=new Set([1,2,3,34,4])
// console.log(typeof yo)
yo.add(1)
yo.add('hi')
// console.log(yo.has('hi'))
for(let i of yo){
console.log(i)
}