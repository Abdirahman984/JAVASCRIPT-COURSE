// VARABLES AND DATA TYPES 

// DATA TYPES

// 1. STRINGS
console.log("hello world"[0]);

let string = "welcome to javascript crush course"
// print 
console.log(string[string.length-1])
console.log(string[30])

// 2. NUMBERS
console.log(5+5)
console.log(9-1)
console.log(7*5)
console.log(55/5)
console.log(10%5)

// 3. BOOLEAN
console.log(20<11)
console.log(2>1)

// 4. NULL
let abdi =null
console.log(abdi)

// 5. UNDEFNED
// let great = 
// console.log(great)


// VARIIABLES
let USD = 1200
let AUD = 1200 *1.5
console.log(AUD)

// COMPARISON OPERATOTS

// 1. greater than --- >
console.log(10>9)

// 2. less than --- <
console.log(20<9)

// 3. greater than or equal to --- >= 
console.log(30>=20)

// 4. less than or equal to --- >= 
console.log(100<=90)

// 5. equal to the value --- == 
console.log(30===30)

// 6. equal to the value and data type --- === 
console.log("30"===30)

// 7. not equal to the value --- !=
console.log(40!=30)

// 8. equal to the value and data type --- !==
console.log(100 !== "200")

// EXERCSE QUIZ TEST

// ✅ PART 1 — Basics (No excuses mistakes)
// 1. What is the data type of each?

// typeof "Hello" = string 
// typeof 100 = Number
// typeof true = boolean
// typeof null = null
// typeof undefined = unedfined 

// 2. What will this print?

let x = 10;
let y = "10";

console.log(x == y); // true
console.log(x === y);  // false 

// Explain why.
// its because the first check the value if its equal to which is true 10 == 10 and the other one check the value and data type 


// 3. What is wrong here?
const age = 15;
// age = 20;
console.log(age)

// Why does it fail?
// its because you can not reasign values

// 4. Predict the output:
let a;
console.log(a);

 // What is the value? What is the type?
//  undefined and its undefined data type


// ⚠️ PART 2 — Concept Traps
// These test if you actually understand coercion.

// 5. Predict the output:
console.log("5" + 2); // 52
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5

// 6. What is the type of:
typeof NaN //  number
// typeof [NaN]
// typeof {NaN}

// 7. What will happen?
let name = "Abdi";
// let name = "Ali";



// Why? its because redeclared let 


// 8. What is the difference between:
let fx // undefned
console.log(typeof fx)
console.log(typeof fx)

let w = null; // null
console.log(w)
console.log(typeof w)

/// Explain clearly. undefined mean you declared the value but you have not assign value
                   // null mean its nothing its an object data tyep


// 🔥 PART 3 — Prediction Challenge
// 9. Output?
let aa = 5; 
let b = aa;
b = 10;

console.log(aa);

// 10. Output?
let bb = [1,2,3];
let cc = bb;
// b.push(4); 

console.log(bb);

// 💀 PART 4 — Real Thinking Problems
// These separate beginners from developers.

// 13. Fix this bug:
let score = "100";
let bonus = 20;

 let total = Number (score) + bonus;
console.log(total)







