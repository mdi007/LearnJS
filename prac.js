"use strict"
// call,apply,bind
const user={
    firstName:'ibrahim',
    address:{home:'30-27'},
    about:function(hobby){console.log(` my hobby is ${hobby}`)}
}
const user2={
    firstName:'mohammad',
    age:9
}
function about1(hobby){console.log(` my hobby is ${hobby}`)}
// call-basically we can use same function for differrent users
user.about('playing')
user.about.call(user2,'dancing')
// if about is outside of user then :- about.call(user2)
// ----------------
                // apply
about1.apply(user,['yoy','dance'])
// in apply we can pass array and it takes number of parameters
// ----------------
//                  bind 
// it returns a functions
const func=about1.bind(user2,'dance');
func();