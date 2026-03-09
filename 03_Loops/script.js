/*LOOPS

 FOR LOOP 
 SYNTAX

 for (let i = 0; i <20;  i++){
 console.log (i)
 } */

//  for (let i = 0; i <25; i+= 2 ){
//     console.log(i)
//  }

//  for (let name =0; name>=10; name++){
//     console.log()
//  }


 /* WHILE LOOP

 while (condition) {
  // code block to be executed
} */

//   let counter = 0;
//   while(counter>=20){
//      counter ++;
//     console.log(counter)
    
// }


// EXERCISE 1

for (let i=1; i<=15; i++){
    if(i % 5 == 0){
        console.log(`${i} - ASAP FRONT END`)
    } else if( i%2 === 1){
    console.log(`${i} - ASAP`)
 } else if (i%2===0) {
    console.log(`${i} - frontend`)
 }
}


// EXERCISE 2
let str = "ASAP FRONTEND"
for(let i = 0; i<=12; i++){
    console.log(str[i])
}

// EXERCISE 3
for(prime =1; prime <=10; prime ++){
    if(prime%2==1)
    console.log(prime)
}





