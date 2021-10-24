"use strict"
// -------------FUNCTIONS------------
function hello(){
    return 'yoyoyyoyo'
}
console.log(hello())

const sum=function(n1,n2){return n1+n2}
console.log(sum(2,3))
const sum1=(n1,n2)=>{return n1+n2}
console.log(sum1(2,3))
const yo=n=>{console.log(n)}
yo('yoyyyyyo')
const iseven=n=>n%2===0;
const mul=(n1,n2)=>n1*n2;
console.log(iseven(4))
console.log(mul(4,5))
// ------lexical scope--
const myv='value1'
{
function mya(){
    // const myv='v2'
    function mya1(){
        const myv='v2';
        console.log('inside mya1',myv);
    }
    mya1();
    console.log(myv);
}

mya()
}
// -------------------
// let and const is block scope
// var is a function scope
const person={
    firstName:'Mohammad',
    lastName : 'Ibrahim',
    age:20,
    "college":'SNIST'
};
function add(a,b=0){return a+b}
console.log(add(4))
const a=[1,2,3,4,5,6]
// ----------
function a1({firstName,age}){
    console.log(firstName)
    console.log(age)
}
a1(person)
// --------------
// callback function
function myf(){
    console.log('inside myf');
}

function myf2(myf){
    console.log('myf2');
    // myf()
}
myf2(myf);
// ------------------
// function returning funtion
function myf() {
    function hello() {
        console.log('HELLO');
    }
    return hello;

}

console.log(myf()());