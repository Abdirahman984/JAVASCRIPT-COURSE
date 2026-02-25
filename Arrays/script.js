// ARRAYS 

let shoppingList = ["shirt", "trouser", "t-shirt", "jacket"]
console.log(shoppingList)
console.log(shoppingList[0])
console.log(shoppingList[shoppingList.length-1])

// ARRAY METHODS

// 1. PUSH --- Add item
shoppingList.push("bread")
console.log(shoppingList)

// 2. FLTER --- to filter items
// NON-MUTATING METHOD

let numbers = [10, 20, 30, 40, 50]
console.log(numbers)

let filterArray = numbers.filter(elements => { 
    return elements <= 25})
console.log(filterArray)


// EXERCISE 
// let allPeopleNiightClub = 
//  [18, 20, 16, 15, 21];

// let filterPeople = allPeopleNiightClub.filter ( (people) =>{
//  return people >= 18  
// })
// console.log(filterPeople)

let allPeopleNiightClub = [18, 20, 16, 15, 21];

let adults = []

for (let i=0; i<allPeopleNiightClub.length; i++){
    console.log(allPeopleNiightClub[i])

// check if its above 18+
if (allPeopleNiightClub [i] >=18){
 adults.push(allPeopleNiightClub[i])
}
}
console.log(adults)

// 3. MAP --- its used to map and clone

let array = [1,2,3,4,5]
let newArrry = array.map ((items)=>{
 console.log(items)
 return null
})
console.log(newArrry)


// Challenge 1 — Even Numbers Processor
let allNumbers = [3, 8, 15, 22, 7, 10, 5, 18];

// filter even numbers
let evenNumbers = allNumbers.filter ((num)=>{
if(num%2== 0) return num
})
// multply by 2
let multiply = evenNumbers.map ((num)=>{
 return num * 2   
})

console.log(multiply)

evenNumbers.push(100)
console.log(evenNumbers)

// Challenge 2 — Real Developer Level
let students = [
  { name: "Ali", score: 80 },
  { name: "Sara", score: 45 },
  { name: "John", score: 90 },
  { name: "Amina", score: 30 }
];

// Use filter() to get students who passed (score ≥ 50). 
let studentPass = students.filter((pass)=>{
 return pass.score >=50 
})

//Use map() to return only their names.

let studentsName = studentPass.map((student)=>{
 return student.name
})

console.log(studentsName)

// Challenge 3 — convert ausrulian dollars to usdollars 
// 1 ausdolar = 1.5 usdolar

let usDollar = [10, 20, 30, 40]

// let auDollar = usDollar.map ((dollar)=>{
// return dollar * 1.5    
// })
// console.log(auDollar)

// without using .map

let AustDollars = []
for (let i=0; i< usDollar.length; i++){
 usDollar[i] * 1.5
 AustDollars.push(usDollar[i] *1.5 )
}
console.log(AustDollars)

