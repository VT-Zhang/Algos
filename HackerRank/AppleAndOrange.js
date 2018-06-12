// https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let res = [0,0];
    for (let i = 0; i < apples.length; i++) {
        if (a + apples[i] >= s && a + apples[i] <= t) {
            res[0]++;
        }
    }
    for (let j = 0; j < oranges.length; j++) {
        if (b + oranges[j] <= t && b + oranges[j] >= s) {
            res[1]++;
        }
    }
    return res;
}

console.log(countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]));
console.log(countApplesAndOranges(2,3,1,5,[2],[-2]));

