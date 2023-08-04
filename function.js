// function add(num1, num2){
//     var sum = num1 + num2;
    
//     return sum;
// }

// var total = add(121, 24)
// console.log("Total:", total);

function singaraKhabo(money){

    var singaraPrice = 10;
    var quantity = money / singaraPrice;
     
    return quantity;
}

var totalTk = 130;
var singaras = singaraKhabo(totalTk);
console.log("Eating singaras: ", singaras);