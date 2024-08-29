console.log("hello from inside the main.js file")

// let myVar;
const myVar = 42;

const myVarType = typeof(myVar);

console.log("myVarType " + myVarType);
console.log(`myVarType ${myVarType}`);

if(myVarType === "simer"){
    console.log(`this line will run`)
} else {
    console.log(`this line will not run`)
}

function runNow() {
    if(myVarType === "number"){
        console.log(`this line will run`)
    } else {
        console.log(`this line will not run`)
    }
}

runNow();