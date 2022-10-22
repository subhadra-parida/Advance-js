// With the bind() method, an object can borrow a method from another object.

let PrintFullName = function (NGO , PLACE) {
    console.log(this.FirstName + " " + this.LastName + " " +"from" +" " + NGO + " " + PLACE);
}
let name2 = {
    FirstName : "Barsha" ,
    LastName : "Priyadarshini",
}
let PrintMyName = PrintFullName.bind(name2 , "NavGurukul" , "Sarjapur" )
console.log(PrintMyName);
// Invoking the function().........
PrintMyName();


// OUTPUT:-
// Barsha Priyadarshini Fron NavGurukul Sarjapur
