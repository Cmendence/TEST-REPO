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
