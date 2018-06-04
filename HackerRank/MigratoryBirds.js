// https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(ar) {
    let map = {};
    let max = 0;
    for (let i = 0; i < ar.length; i++) {
        if (!map[ar[i]]) {
            map[ar[i]] = 1;
        } else {
            map[ar[i]]++;
        }
    }
    for (let key in map) {
        if (max < map[key]) {
            max = map[key];
        }
    }
    for (let res in map) {
        if (map[res] === max) {
            return res;
        }
    }
}

console.log(migratoryBirds([1,4,4,4,5,3]));
