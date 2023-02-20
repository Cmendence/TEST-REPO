//week 3 arrays text work

//1. Let's simplify the Grade Book Example
// now by using an array, and a for loop to print the grades:

let fullName = "Mary" + " " + "Brown";
let gradesArray = [100, 79, 80, 90, 100];

console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let i = 0; i < 5; i++) {
console.log((i+1) + ": " + gradesArray[i]);
}


// 2. Check out this rewrite of our Grade Book Array Example, 
// using an enhanced for loop to print the grades:


// 3. Arrays in JavaScript can have elements added to them. 
//   Here we add one more grade to an array by using arrayName.push() 
//   Check out one more Grade Book Array Example rewrite:

