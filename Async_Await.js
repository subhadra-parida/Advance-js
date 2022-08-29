// import fetch from "node-fetch";


// console.log("This is Tutorial 43");
// async function harry(){
//     console.log("Inside harry Function")
//     return "harry";
// }
// console.log("Before calling harry");
// let a=harry();
// console.log("After calling harry");
// console.log(("Last line of this JS file"))
// console.log(a);

console.log("This is Tutorial 43");
async function harry(){
    console.log("Inside harry Function")
    const response = await fetch('https://api.github.com/users');
    console.log("Before response");
    const users = await response.json();
    console.log("users resolved")
    return users
    // return "harry";
}
console.log("Before calling harry")
let a=harry();
console.log("After calling harry")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this JS file")






// Output
// This is Tutorial 43.
// Before calling harry.
// Inside harry Function
// After calling harry