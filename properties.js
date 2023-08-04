var shoppingCart = {
    pen: 10,
    paper: 5,
    book: "vai brothers",
    food: 'pepe'
}

shoppingCart.food = "orange";

var myFood = shoppingCart["food"]

console.log(myFood);