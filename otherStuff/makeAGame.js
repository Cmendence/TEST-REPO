let points = 0;
let pointsReset = false; 

//write your code here

//turns = 100 || points > 290
//if points = 125, pointsReset = true, points = 25
//even turns, points +5
// odd turns, points +3



for (let turns = 0; turns < 100 && points < 290; turns++) {
    if (!pointsReset && points == 125){
        pointsReset = !pointsReset;
        points = 25;
        
}   else if (turns % 2 == 0){
    points+=5;
}   else if ((turns % 2) !== 0){
    points+=3;
}
console.log('Turns: ' + turns + ' Score: ' + points);
}
