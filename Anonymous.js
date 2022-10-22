function addnum(a,b){
    console.log("Name fuction addnum is called.");
    return a+b;
}

var anon=function(a,b){
    console.log("Anonymous function is called.");
    // return a+b;
    console.log(a+b);
}
anon(5,6);
setTimeout(function(){console.log("Anonymous function call in setTimeout.")},5000);
addnum(1,2);

