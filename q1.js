// // function conm(){
// //     int num=1;
// //     char =2;
// //     if (a==b)
// //         return true;
// //     else
// //         return false;


// // }
// // var a=0;
// // var b=0;
// // while (a<3){
// //     a++
// //     b+=a
// //     console.log(b)
// // }

// var scope ="js scope";
// function sas(){
//     var scope ="java scope";
//     function f(){
//         return scope;

//     }
//     return f
// }

function calcSurface() {
    var radius = document.getElementByID("radius").value;
    radius = math.abs(radius);
    Surface = 4*Math.PI*Math.pow(radius);
  }  
calcSurface(12)