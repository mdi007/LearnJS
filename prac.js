"use strict"
//CLASS
class Createuser{
    constructor(firstName,age){
        this.firstName=firstName;
        this.age=age;
    }
    about(){
        return `name : ${this.firstName} and Age : ${this.age} `
    }
}
const user1=new Createuser('ibrahim',20);
console.log(user1.about());
// ---------------------
// inheritance,super 
class animal{
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    eat(){
        return 'eating...';
    }
}
class dog extends animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
    }
    run(){
        return `dog ${this.name} is running at the speed of ${this.speed}`
    }
}
const ani=new dog('tommy',7,45);
console.log(ani.run());
console.log(ani.eat())
// ====================
// getter and setter 
// with the help of get we can use method as property 
class animal1{
    static info(){console.log('this is statis')}
    static vv='hello';
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    get eat(){
        return 'eating...o';
    }
}
const ani1=new animal1('tommy',34);
console.log(ani1.eat)
console.log(animal1.vv)
animal1.info();

