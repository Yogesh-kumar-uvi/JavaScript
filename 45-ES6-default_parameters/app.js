function multiply (a ,b = 1){
    return a*b
}
multiply(2,3)

function rollADice(numberOfSides = 9){
    return Math.floor(Math.random()*numberOfSides)+1;
}