// https://www.hackerrank.com/challenges/extra-long-factorials/problem

function extraLongFactorials(n) {
    let res = 1;
    while (n > 0) {
        res *= n;
        n--;
    }
    return res.toString();
}

console.log(extraLongFactorials(25));