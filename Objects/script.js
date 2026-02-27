// JS OBJECTS

let users =[
 {
 email: "abdirahman@gmail.com",
 password : "test1234",
 phone : +254725030226,
 discord : "abdirhaman",
 payment : "EVC +"

},

{
email: "aisha@gmail.com",
 password : "test1234",
 phone : +254709030226,
 discord : "aisha",
 payment : "mpesa"

}

]
console.log(users[1])


// sign up challenge
function signup (user){
users.push(user)
}

signup({
 email: "hassan@gmail.com",
 password: "test1234", 
 name : "hassan",
 subscription: "PAYBILL",
lessoncompled: "1,2,3,4,5"
})

console.log(users)

// Challenge 1 — Student Object Analyzer
let student = {
  name : "abdirahman",
  age : 19,
  grade : [90,20,40,70,100],
  isactive : true,

getAverage : getAverage (){

  }
  

  
}
