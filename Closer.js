var c=20;
function outer(){
    var a=5;
    function inner(){
        var b=10;
        console.log(b)
    }
    inner()
    console.log(a)
}
console.log("Barsha")
outer();



// OUTPUT:-
// Barsha
// 10
// 5

