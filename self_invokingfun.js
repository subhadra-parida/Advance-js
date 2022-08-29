// (function(a,b){
//     console.log("in self invoking function");
//     // return a+b;
//     console.log(a+b)
// })(4,6);

(function(a){
    console.log("Callig self inc=voking funstion:"+a*a);
    return a*a 
}),(10);