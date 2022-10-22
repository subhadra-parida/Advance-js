var a=20;
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
// console.log(c)
outer();
// console.log(c)

