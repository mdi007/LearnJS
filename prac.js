"use strict"
//  ===================================================
//              IMPORTANT ARRAY METHODS
// =====================================================
// FOR EACH
function myf() {
    function hello() {
        console.log('HELLO');
    }
    return hello;

}
const num=([1,2,22,1,3,4,5,6])
num.forEach(myf)
num.forEach((nums,i)=>{console.log(nums,i)});
// --------
// MAP METHOD

const sq=nums=>nums**2
const sqnumbs=num.map((n)=>n*n);
console.log(sqnumbs);
// -0---------
// FILTER METHOD
const iseven=function(n){return n%2!==0}
console.log(num.filter(iseven));
// ----------
// REDUCE METHOD
const sum=num.reduce((accumulator,currentValue)=>{return accumulator+currentValue});
console.log(sum)
// ---------------
const yoy=[{name:'ibrahim',age:20},
           {name:'ibrahim1',age:23},
           {name:'ibrahim2',age:53}
        ]
const k=yoy.reduce((a,c)=>{return c.age+a},0)
console.log(k)
// ---------------
// SORT METHOD-according to ascii value 
console.log(num.sort((a,b)=>a-b))      //-asscending
// ---------
// FIND METHOD. 
const ans=num.find(s=>s===2)
console.log(ans)
// ----------
// EVERE MOTHOD
console.log(num.every(n=>n%2===0))
// -----
// SOME METHODS
console.log(num.some(n=>n%2===0))
// -------
// FILL METHOD 
const myar=new Array(10).fill(1)
console.log(myar.length)
console.log(myar)
// -----------
// SPLICE METHOD 
// start,delete,insert
// delete
myar.splice(1,2)
// insert 
myar.splice(1,0,'hello')
console.log(myar)