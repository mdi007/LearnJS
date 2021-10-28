"use strict"
//note-1

const user2={
    firstName:'mohammad',
    age:9,
    about:function (hobby){console.log(` ${this.firstName} my hobby is ${hobby}`)}
}
//  dont do this method 
const myfc=user2.about('yoyo');
const myfc1=user2.about;
// is equal to-
const myfc1_1=function (hobby){console.log(` ${this.firstName} my hobby is ${hobby}`)}
// myfc1_1('hello')
// Bcause: this means windows

// instead use 
const myf=user2.about.bind(user2);
myf('hw')