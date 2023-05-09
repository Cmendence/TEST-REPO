/*Movie Rating
Write a program that does the following:

Determine if the movie rating is good(a rating of 7 or above is considered good)
Determine if the movie rating is great(a rating of 8 or above is considered great)
Print the results of both determinations to the console using console.log()*/
const movieRating = 8.5;
const goodMovieThreshold = 7;
const greatMovieThreshold = 8;

if (movieRating >= greatMovieThreshold){
    console.log('This movie is great!');
 } else if (movieRating >= goodMovieThreshold){
        console.log('This movie is good.');
    } else {
        console.log('Eh, it was ok.');
    }


    /***
 * Is it Lunchtime?

Is it time for lunch? If the time is between 12 PM and 1 PM, print true. Otherwise, print false.

The values should be of type boolean, not strings.
The comparison operator we want to use is >= and <=.
The AND operator is &&.
 */


let time = 12

isLunchtime = time >= 12 && time <= 13;
console.log(isLunchtime)

/** Question 2
* 
* Can You Buy A Movie Ticket? 
* Write an if statement that checks if the given age is greater 
* than or equal to 17. If it is, set canWatch to true and using 
* console.log() print its value to the console. Use the already 
* declared variables of age and canWatch.
*/

age = 16
canWatch = false

if (age >= 17){
console.log('Enjoy the movie!');
} else {
console.log('I think Moana is still playing');
}