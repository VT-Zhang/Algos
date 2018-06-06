// https://www.hackerrank.com/challenges/halloween-sale/problem

function howManyGames(p, d, m, s) {
    let games = 0;
    while (s >= 0) {
        if (p - d * games > m) {
            s -= (p - d * games);
        } else {
            s -= m;
        }
        games++;
    }
    return games - 1;
}

console.log(howManyGames(20,3,6,85));
console.log(howManyGames(20,3,6,80));
console.log(howManyGames(16,2,1,9981));