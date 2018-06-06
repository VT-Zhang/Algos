// https://www.hackerrank.com/challenges/minimum-distances/problem

function minimumDistances(a) {
    let min = 1e6;
    for (let i = 0; i < a.length; i++) {
        for (let j = 1; j < a.length; j++) {
            if (a[i] === a[j] && i !== j) {
                min = Math.min(min, Math.abs(i - j));
            }
        }
    }
    if (min === 1e6) {
        return -1;
    }
    return min;
}

console.log(minimumDistances([7,1,3,4,1,7]));
console.log(minimumDistances([3,2,1,2,3]));
console.log(minimumDistances([1,2,3,4,5]));
