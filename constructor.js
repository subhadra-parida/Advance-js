// var addFunc=new function(a,b);
// var c= addFunc(2,3);
// console.log(c);

// var addFunc=function(a,b){
//     return a+b;
// }
// var c=addFunc(1,2)
// console.log(c)
    



// function Person(){
//     this.name="John",
//     this.age=22
//     this.greet=function(){
//         console.log("Hello")
//     }
// }
// // Create an object
// const person1=new Person()
// const person2=new Person()
// // Access property
// console.log(person1.name);
// console.log(person2.name);




// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     // get cnam() {
//     //   return this.carname;
//     // }
//     // set cnam(x) {
//     //   this.carname = x;
//     // }
//   }
  
// let_myCar = new Car("Ford");
// console.log(let_myCar)


class Person {

    constructor(name) {
      this.name = name;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name}`);
    }
  
  }
  
  const otto = new Person('Otto');
  
  otto.introduce();
