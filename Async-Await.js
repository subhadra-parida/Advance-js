console.log("This is Tutorial 43");
async function harry(){
    console.log("Inside harry Function")
    return "harry";
}
console.log("Before calling harry");
let a=harry();
console.log("After calling harry");
console.log(("Last line of this JS file"))
console.log(a);

// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});
async function asyncFunc() {
    let result = await promise; 
    console.log(result);
    console.log('hello');
}
asyncFunc();


