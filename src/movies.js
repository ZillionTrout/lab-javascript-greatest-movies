// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramasSpielberg = moviesArray.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return dramasSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    else {
        let addScore = moviesArray.reduce((total, currentValue) => {
            return total + currentValue.score; }, 0) / moviesArray.length;
            return Math.round(addScore * 100) / 100;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaScore = 0
    let dramaArr = []
    for (let i=0; i<moviesArray.length; i++)
    if (moviesArray[i].genre.includes('Drama')) {
        dramaScore += moviesArray[i].score
        dramaArr.push(moviesArray[i])
        if (!dramaArr.length) return 0;
    }
    if (!dramaArr.length) return 0;
    return Number((dramaScore/dramaArr.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    // const yearArr = moviesArray.map(movie => movie.year)
    // const orderYear = yearArr.sort(function (a, b) 
    const orderYear = [...moviesArray].sort((a,b) => {
        if (a.year > b.year) return 1;
        else if (a.year < b.year) return -1;
        else if (a.title > b.title) return 1;
        else if (a.title < b.title) return -1;
        else return 0;
    });
    return orderYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movTitle = moviesArray.map((movie) => {
        return movie.title;
    });
    movTitle.sort();
    return movTitle.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
