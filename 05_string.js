const name="Naman"
const repoCount= 50

// console.log(name + repoCount + "value");



//STRING INTERPOLLATION

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Namannew')

console.log(gameName[0]);
console.log(gameName._proto_);

 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 
const newString=gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const One="    naman     "
console.log(One);
console.log(One.trim());


const url ="http://naman.com/naman%20kapoor"

console.log(url.replace('%20kapoor','-khosla'))

