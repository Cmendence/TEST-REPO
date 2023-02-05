var ageRequiredToDrive = 16;
var currentAge = 17;
var canPersonDrive = currentAge >= ageRequiredToDrive;

console.log(canPersonDrive);

if (currentAge >= ageRequiredToDrive) {
    console.log('Ready for the Road!')
} else {
    console.log("Looks like you're walking")
}

var firstName = 'Pete';
if (firstName == 'Chris') {
    console.log('Hello, Chris!');
} else {
    console.log('Hello' + ' ' + firstName + '!');
}


var priceOfMilk = 2.50;
var pocketMoney = 2.49;

if (pocketMoney == 2 * priceOfMilk) {
    console.log('Got 2 milks!');
} else if (priceOfMilk <= pocketMoney) {
    console.log('Bought 1 milk');
} else {
    console.log('No milk today');
}

var grade = 'B';

switch(grade){
    case 'A':
        console.log('90-100');
        break;
    case 'B':
        console.log('80-89');
        break;
    case 'C': 
        console.log('70-79');
        break;
    default:
        console.log('0-69');
}

var priceOfEggs = 3

if (priceOfEggs >= 3.00) {
    console.log('Buy 1 dozen eggs');
} else if (priceOfEggs >= 2 && priceOfEggs <= 2.99) {
    console.log('Buy 2 dozen eggs');
} else if (priceOfEggs <= 1.99) {
    console.log('Buy 4 dozen eggs');
}

var numberOfDozensOfEggsToPurchase = 0

if (priceOfEggs > 3) {
    numberOfDozensOfEggsToPurchase = 1;
} else if (priceOfEggs >2) {
    numberOfDozensOfEggsToPurchase = 2;
} else if (priceOfEggs > 1) {
    numberOfDozensOfEggsToPurchase = 3;
} else {numberOfDozensOfEggsToPurchase = 4;
}
console.log('I will buy ' + numberOfDozensOfEggsToPurchase + ' dozen eggs today.');


for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('On to the next!');

for (let i = 0; i <=30; i++) {
    if (i % 4 == 0){
        console.log(i);
    }
}


let names= ['Tom', 'Dick', 'Harry'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

let a = 25;

while (a < 10){
    console.log(a);
    a++;
}

do {
    console.log(a);   
} while (a < 10);


for (i in names) {
    console.log(i);
}

for (name of names) {
    console.log(name);
}

console.log('While loop');

let cupsOfFlour = 0;

while (cupsOfFlour < 5){
    console.log('Adding one cup of flour to the bowl');
    cupsOfFlour += 1;
    console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl!');
}

console.log('For Loop');

for (let cupsOfFlour = 0; cupsOfFlour <=5; cupsOfFlour++){
    console.log('Adding one cup of flour to the bowl');
    console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl!');
}


