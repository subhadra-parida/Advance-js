// The bind() method creates a new function that, when called,
//  has its this keyword set to the provided value, with a given 
// sequence of arguments preceding any provided when the new function is called.

// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).
let name = {
    FirstName : "Subhadra" ,
    LastName : "Parida" , 
}
let PrintFullName = function (ownstate , village) {
    console.log(this.FirstName + " " + this.LastName + " " +"from" +" " + ownstate + " " + village);
}
PrintFullName.call(name , "Odisha" , "Dhenkanal");
// Using Call() Methods.........
let name2 = {
    FirstName : "Barsha" ,
    LastName : "Priyadarshini",
}
PrintFullName.call(name2 , "Odisha" , "Jajpur" )

// OUTPUT:--
// Subhadra Parida
// Barsha Priyadarshini 