// https://www.hackerrank.com/challenges/find-digits/problem

function findDigits(n) {
    let count = 0;
    let str = n.toString();
    for (let i = 0; i < str.length; i++) {
        if (n % parseInt(str[i]) === 0 && parseInt(str[i]) !== 0) {
            count++;
        }
    }
    return count;
}

console.log(findDigits(1012));
console.log(findDigits(12));