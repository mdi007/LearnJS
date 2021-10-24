"use strict"
// ---------------OBJECTS-----------------------
// object has key as sting and symbol only 
const person={
    firstName:'Mohammad',
    lastName : 'Ibrahim',
    age:20,
    "college":'SNIST'
};
person.gender='male';
person['song']='bella ciao'
console.log(person['college']);
console.log(person.firstName);
console.log(person)
// ----------------
for(let key in person){
    console.log(person[key])
}
console.log(Object.keys(person))

for(let i of Object.keys(person)){
    console.log(i,person[i])
}
// ----------
const arrr=[..."persin"]
const newObj={..." abcdefghij",69:'yoyo' }
console.log(arrr)
// -----object destructuring
const {firstName:myname,age,...rest}=person;
console.log(myname);
console.log(rest);
// --------------------------
// objects in arrays
const users=[{
    firstName:'Mohammad',
    lastName : 'Ibrahim',
    age:20,
    "college":'SNIST'
},{
    firstName:'yoyo',
    lastName : 'honey',
    age:47,
    "college":'SNISTyo'
}]
const [{firstName:myname1,age1,college},{college:college1}]=users;
console.log(myname1)
console.log(college1)