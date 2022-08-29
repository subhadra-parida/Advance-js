// function Person(){
//     this.name="sam";
// }
// let person1=new person();
// let person2=new person();
// person1.age=20;
// person2.age=30;
// console.log(person2.age);


function Person(){
    this.name="sam";
    this.age=22;
}
let person1= new person();
let person2= new person();
// person1.age=20;
// person2.age=30;
Person.prototype.gender = "male";
console.log(person1.gender);
console.log(person2.gender);
