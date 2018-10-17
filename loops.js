// For-loop functions

function positiveIntSum(limit){
    let sum = 0;
    for(let i = 1 ; i <= limit; i=i+1){
            sum = sum + i;
    }
    return sum;
}


function additionPatternSum(start, diff, limit,){
    let start;
    let diff;
    let limit = 100
    for (let i = start; i <= limit;i = i + diff){
            start = start + i
    }
    return start
}




// While-loop function

function multiplicationPatternSum(start, factor, max,){
    let start;
    let factor;
    let max;
        while(i = start,  i <= max, i = i + diff){
            start = start + i;
        }
    return start    
}





//Later copy paste the checking code below here.
console.log(positiveIntSum(10))
console.log(additionPatternSum(10))