const cfpData = [];

function determineHouseHoldPts(numberInHousehold) {
 
 let houseHoldPoints = 0;

  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold > 5) {
    houseHoldPoints = 2;
  }

}

 let carbonFootprintPoints = 0;

function cfpHouse(houseSize){
  let houseSizePoints = 0; 
    if (houseSize === "large") {
      houseSizePoints = 10;
    } else if (houseSize === "medium") {
      houseSizePoints = 7;
    } else if (houseSize === "small") {
      houseSizePoints = 4;
    } else if (houseSize === "apartment") {
      houseSizePoints = 2;
    }

   
    return houseSizePoints;
}


function start(houseHoldMembers, houseSize) {
 const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
 const houseSizePTS = cfpHouse(houseSize);
 const total = houseHoldPTS + houseSizePTS;
 cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total]);
}

function displayOutput() {
  
}

start(5, "apartment");
start(4, "large");
start(3, "medium");
start(2, "small");
start(1, "small");
start(6, "small");

displayOutput()




