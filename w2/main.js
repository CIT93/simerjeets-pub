// How to Calculate your Carbon Footprint
// Method 1

// 1. Count the members of your household.
const myHouseMembers = 12;
// 2. Consider the size of your home
const myHouseSize = 4;
// 3. Evaluate your food choices
const myFoodChoices = 6;
// 4. Examine your water consumption
const myWaterConsumption = 2;
// 5. Determine how many household purchases you make each year
const myHouseHoldPurchases = 4;
// 6. Consider how much waste you produce.
const wasteProduced = 30;
// 7. Identify the amount of waste that you recycle
const wasteRecycled = 12;
// 8. Tally up your annuial transportation scores
const transportationScore = 6;
// 9. Add up your points
const cfpTotal = myHouseMembers + myHouseSize + myFoodChoices + myWaterConsumption + myHouseHoldPurchases + wasteProduced + wasteRecycled + transportationScore;
// 10. Write JS to update the rendered html (index.html) with total footprint

document.getElementById('cfpTotal').innerHTML = cfpTotal;


