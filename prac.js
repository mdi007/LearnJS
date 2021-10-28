"use strict"
// function inside object

function personinfo(){
    console.log(this.firstName,this.address);
}
const user={
    firstName:'ibrahim',
    address:{home:'30-27'},
    about:personinfo
}
user.about()