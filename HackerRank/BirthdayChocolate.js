// https://www.hackerrank.com/challenges/the-birthday-bar/problem

function solve(s, d, m) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let temp = 0;
        for (let j = i; j < i + m; j++) {
            if (!isNaN(s[j])) {
                temp += s[j];
            }
            if (temp === d && j === i + m - 1) {
                res++;
            }
        }
    }
    return res;
}

console.log(solve([1,2,1,3,2], 3, 2));
console.log(solve([1,1,1,1,1], 3, 2));
console.log(solve([4], 4, 1));