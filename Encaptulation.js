let BaseSalery=20000;
let OverTime=10;
let Rate=20;
function getwage(BaseSalery , OverTime , Rate){
    return BaseSalery + (OverTime + Rate);
}
let employee = {
    BaseSalery : 20000 ,
    OverTime : 10 ,
    Ratec: 20 , 
    getwage : function(){
        return this . BaseSalery + (this . OverTime * this.Rate);
    }
    console.log(BaseSalery)
}
employee . getwage()

