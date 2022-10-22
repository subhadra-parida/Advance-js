var char_list = ["j", "y", "o", "t", "i", "r", "a", "n", "i", "b", "e", "h", "e", "r", "a"]
var uniques=[]
for(var i of char_list){
   if(!uniques.includes(i)){
       uniques.push(i)
   }
}
console.log(uniques);
 
for(var j of uniques){
   count=0
   for(var k of char_list){
       if (j === k){
           count+=1
       }
   }
   console.log(j,count," times");
}

