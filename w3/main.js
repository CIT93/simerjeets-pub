/* const myName = "Simer Singh";
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

The error is - missing defer */

function determineHouseHoldPts(numberInHousehold) {
  // console.log("inside the function");

  if (numberInHousehold === 1) {
    carbonFootprintPoints = carbonFootprintPoints + 14;
  } else if (numberInHousehold === 2) {
    carbonFootprintPoints = carbonFootprintPoints + 12;
  } else if (numberInHousehold === 3) {
    carbonFootprintPoints = carbonFootprintPoints + 10;
  } else if (numberInHousehold === 4) {
    carbonFootprintPoints = carbonFootprintPoints + 8;
  } else if (numberInHousehold === 5) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
  } else if (numberInHousehold > 5)
    carbonFootprintPoints = carbonFootprintPoints + 2;

  console.log(
    `Based on the number of members of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}`
  );
}

let carbonFootprintPoints = 0;
// const numberInHousehold = 2;

//global scope 

// determineHouseHoldPts(3);

function cfpHouse(houseSize){
    if (houseSize === "large") {
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (houseSize === "medium") {
        carbonFootprints = carbonFootprintPoints + 7;
    } else if (houseSize === "small") {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (houseSize === "apartment") {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }

    console.log(
    `Based on the size of this ${houseSize} house the points would be ${carbonFootprintPoints}`
    )
}

determineHouseHoldPts(3);
cfpHouse("apartment");
