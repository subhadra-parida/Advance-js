const prom=new Promise((resolve,reject)=>{
    var a=8
    if(a==80){
        resolve("yes")
    }
    else{
        reject("no")
    }
    }
    )
    prom.then((massege)=>{
        console.log(massege)
    
    })
    .catch((massege)=>{
        console.log(massege)
    })
