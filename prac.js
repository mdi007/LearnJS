"use strict"
//generalize creation of users
const usermethods={
    // firstName:'ibrahim',
    // age:20,
    about(){return `${this.firstName} and ${this.age}`},
    is18(){return this.age>18}
}
// console.log(usermake.is18());
// console.log(usermake.about());
// -----------------
// now create a function to make task of creating users easy
function createusers(firstName,age){
    const user={}
    user.firstName=firstName;
    user.age=age;
    user.about=function(){return `${this.firstName} and ${this.age}`};
    user.is18=function(){return this.age>18};
    return user;
}
// const user1=createusers('ibrahim',20);
// const user2=createusers('yoy',8);
// console.log(user1.about())
// console.log(user1.is18())
// console.log(user2.about())
// console.log(user2.is18())
// ------------------
// the problem in the above method is that if there are n users then n time the methods about,is18 is created.
// ===============================
// instead of definig the the methods in function define the methods seperatly which stores the reference so that u only have to write the methods only one time and it also get initialzed one time which could save alot of memory
//-----
// the problem is if we want to create some n methods then we have to write thje reference of n methods in our function 
// ====================================
// the solution for this is Object.create() method 
const obj1={
    key1:'value1',
    key2:'value2'
}
// const obj2=Object.create(obj1);
// console.log(obj2)  //empty object
// console.log(obj2.key1)  //gives ->value1
//  so basically Object.create() methods search for the attribute in is objt in case if not found it search it in the object mention in parameters 
// ============example=================
function createusers1(firstName,age){
    // const user={}
    const user=Object.create(usermethods);
    user.firstName=firstName;
    user.age=age;
    return user;
}
const user1=createusers1('ib',20)
console.log(user1)
console.log(user1.about())
// ================================== 
        // __proto__ or [[prototype]]
// ==================================
// when Object is created with the help of Object.create() method the reference is created between the two objects which is called the __proto__ or [[prototype]] 
// /======================
// prototype it is the property which is possed by function only 
// we can prove it by using .prototype
function hello(){
    return 'helloo bro';
}
if(hello.prototype){
    console.log('yes it has prototype');
}
// --------------
// when a function is created it has a object and function with
// javascript function===>object({}) + function
// -----------------
// so we can create the usermethods in that object insted of creating a seperate object 
function createusers2(firstName,age){
    // const user={}
    const user=Object.create(createusers2.prototype);
    user.firstName=firstName;
    user.age=age;
    return user;
}
createusers2.prototype.about=function(){return `${this.firstName} and ${this.age}`};
const user11=createusers2('yoyoyoy',9);
console.log(user11.about())
console.log(user11)
// ===================
// new keyword 
// nwe keyword does the following3 things:-
// 1) this={}
// 2)return this
// 3)Object.create(obj.prototype)
// the function which creats the objects is called as constructor function 
function Createusers3(firstName,age){
    this.firstName=firstName;
    this.age=age;
}
Createusers3.prototype.about=function(){return `${this.firstName} and ${this.age}`};
const user22 = new Createusers3('ibb',89)
console.log(user22.about())