/*
2 tarah se classification hota h --> Primitive and Non-Primtive depend karta h kis tarah se memory m rhka jata h aur kis tarah se acess kiya jata h .*/

// PRIMITIVE DATA TYPE: 7 

/*
String
Number
Boolean
Null
Undefined
Symbol
BigInt
*/


//REFERENVE TYPE OR NON=PRIMITIVE TYPE:

/*
Array
Objects
Functions
*/


//JS is dynamicially type or satic type===


//MEMORY 
/*
STACK AND HEAP

PRIMITIVE ----> STACK----> COPY
HEAP---> NON-PRIMITIVE----> REFERENCE
*/

let myYoutubeName="Naman.com"
let anotherName=myYoutubeName       

anotherName="chaiaurcode"


console.log(myYoutubeName);
console.log(anotherName);

let userOne ={
    email:"user@goggle.com",
    upi:"user@ybl"
}
let userTwo=userOne

userOne.email="naman@goggle.com"

console.log(userOne.email);
console.log(userTwo.email);




