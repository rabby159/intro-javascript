function getTotal(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;

    const average = total / 3;

    return average;
}

var singleNumber =  getTotal(60, 58, 60);
console.log(singleNumber);
