"use strict"
// =====================================================
                //   MAP 
// =====================================================
const person = new Map([['firstName','Mohammad'],['age',90]]);
person.set('firstname','ibrahim');
person.set('ages',20);
person.set([1,2,3],'onetwothree')
console.log(person)
console.log(person.get('age'))
for(let i of person){
    console.log(i[0])
}
for(let [i,j] of person){
    console.log(i,j)
}
// --------------------------------------
// clone using object assign
// m-1
const obj={'yo':21}
const obj2={...obj}
console.log(obj2)
// m-2
const onj2=Object.assign({},obj)
console.log(obj)