// FUNCTIONS

// FUNCATION DECLARATION

function greatUser (name, age){
    console.log(` how are you , ${name}, ${age}`)
}

greatUser("abdirahman", 19 )
greatUser("Aisha", 17)
greatUser("osman", 21)

function sum (x, y){
    return x+y
}
console.log(sum(5,5))

// EXERCISE
// function convertAud (amount){
// return amount * 1.5
// }
// console.log(convertAud(1000))
// console.log(convertAud(500))
// console.log(convertAud(200))


// ARROW FUNCTION
const convertAud = (dollar) => {
  return  dollar * 1.5
}

console.log(convertAud(1000))


// Challenge 1 — Smart Price Calculator

function calculateTotal (price, quantity, discount){
if (price <0){
    return "Invalid price"
} if (quantity <0 ){
    return "Invalid quantity"
} if (discount <0 || discount > 100){
    return "Invalid discount"
}

const total = price * quantity 
let dicounAmoumt = (total * discount) / 100
let finalTotal = total - dicounAmoumt 
return finalTotal
}
console.log(calculateTotal(100, 2, 10))


