let points = 0;
let pointsReset = false;
let turns = 0; 

//write your code here

//turns = 100 || points > 290
//if points = 125, pointsReset = true, points = 25
//even turns, points +5
// odd turns, points +3
// 
//if (!pointsReset && points == 125){
//    points = 25;
//}

for (let turns = 0; turns <= 100; turns++) {
} if (turns % 2 == 0){
    points = points + 5;
    turns++;
    console.log('Turns:' + turns + ' Points:' + points);
} else if ((turns % 2) !== 0){
    points = points + 3;
    turns++;
    console.log('Turns:' + turns + ' Points:' + points);
}

