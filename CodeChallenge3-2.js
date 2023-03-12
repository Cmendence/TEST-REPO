/* 
P = money to invest
Y = years to invest
D = final sum
I = interest RATE paid yearly
T = tax RATE

after I is paid and T are taken, I - T is added to P

P is kept for Y years until P = D

P * I
 
 */

let principal = 1000
let interestRate = 0.05
let taxRate = 0.18
let desired = 1100





// console.log(reinvested);
// console.log(principal)

// principal += reinvested;

// console.log(principal)

function calculateYears(principal, interest, tax, desired) {
    // your code
let years = 0
for (years = 0; principal < desired; years ++){
    principal += ((principal * interest) - ((principal * interest) * tax));
    console.log(principal)
    console.log(years)
}
 return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100))