// The apply() method takes arguments as an array.
// The apply() method is very handy if you want to use an array instead of an argument list.

let PrintFullName = function (ownstate , village) {
    console.log(this.FirstName + " " + this.LastName + " " +"from" +" " + ownstate + " " + village);
}
let name2 = {
    FirstName : "Barsha" ,
    LastName : "Priyadarshini",
}
PrintFullName.apply(name2 , ["Odisha" , "Jajpur"] )



// OUTPUT:- 
// Barsha Priyadarshini from Odisha Jajpur

