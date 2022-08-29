var sum=function(a){
    console.log("My Number is" +a);
    var c=4;
    return function(b){
        return a+b+c;
    }
}
var store=sum(200);
console.log(store(5))





// OUTPUT:-
// My Number is 200
// 209