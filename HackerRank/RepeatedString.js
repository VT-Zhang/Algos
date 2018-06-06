// https://www.hackerrank.com/challenges/repeated-string/problem

function repeatedString(s, n) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") {
            count++;
        }
    }
    let repeat = Math.floor(n / s.length);
    let remainder = n % s.length;
    count *= repeat;
    for (let i = 0; i < remainder; i++) {
        if (s[i] === "a") {
            count++;
        }
    }
    return count;
}

console.log(repeatedString("aba", 10));