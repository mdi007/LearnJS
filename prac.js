"use strict"
console.log("Hello World");
{
console.log(this);
//      or
console.log(window);
}
var name='hello' //function scope
console.log(name);

let name1='hello'  //block scope
console.log(name1);
const name2='78' // block oriented and cannot be changed further
name2='hel' //cannot be changed
console.log(name2);