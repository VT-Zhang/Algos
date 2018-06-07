// https://www.hackerrank.com/challenges/sherlock-and-squares/problem

function squares(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (isSquare(i)) {
            count++;
        }
    }
    return count;
}

function isSquare(n) {
    for (let i = 1; n > 0; i += 2) {
        n -= i;
    }
    return n === 0;
}

function squares1(a, b) {
    return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
}

console.log(squares1(3, 9));
console.log(squares1(17, 24));