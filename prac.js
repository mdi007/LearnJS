"use strict"
// convert number to sting 
let age=56;
String(age);
age=age+'';
console.log(typeof age)

// convert sting to number 
var mystr='34';
console.log(typeof mystr)
mystr=+'34';
console.log(typeof mystr)
var mystr='34';
mystr=Number(mystr)
console.log(typeof mystr)

// template string 
let age1=9;
let name = 'Ibrahim';
// normal way:
let aboutme1='my name is '+name+' and my age is '+age;
console.log(aboutme1);
// template string 
let aboutme = `my name is ${name} and my age is ${age}`
console.log(aboutme)
