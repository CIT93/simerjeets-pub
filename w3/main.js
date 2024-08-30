const myName = "Simer Singh";
const myAge = 20;

const jsIsWeird = myName + myAge;
console.log(jsIsWeird);
console.log(typeof jsIsWeird);

// what is order of precedence?
// It is essentially PEMDAS. 

const results = 20 + 2 * 3;      // Multiplication first, then addition
console.log(results);

const amIHungry = false;
console.log(typeof amIHungry);

let myVar;
console.log(typeof myVar);

const myHeading = document.querySelector("h1");
console.log(typeof myHeading);

const myPet = "cat";
const myPetName = "Monkey";
const myPetAge = 2;

console.log("I have a " + myPet + " her name is " + myPetName + " and she is " + myPetAge + " years old");
const outputString = console.log(`I have a ${myPet} her name is ${myPetName} and she is ${myPetAge} years`);
myHeading.textContent = outputString;

// The error is - missing defer