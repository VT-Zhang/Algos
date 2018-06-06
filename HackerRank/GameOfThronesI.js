// https://www.hackerrank.com/challenges/game-of-thrones/problem

function gameOfThrones(s) {
    let map = {};
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }
    for (let key in map) {
        if (map[key] % 2 === 1) {
            count++;
            if (count === 2) {
                return "NO";
            }
        }
    }
    return "YES";
}

console.log(gameOfThrones("aaabbbb"));
console.log(gameOfThrones("cdefghmnopqrstuvw"));
console.log(gameOfThrones("cdcdcdcdeeeef"));
