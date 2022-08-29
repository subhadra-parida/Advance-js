function countdown(number){
    console.log(number);
    const newnumber=number-1
    if (newnumber>0){
        countdown(newnumber);
    }
}
countdown(4)
