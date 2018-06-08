// https://www.hackerrank.com/challenges/save-the-prisoner/problem

function saveThePrisoner(n, m, s) {
    let res = s + m - 1;
    if (res > n) {
        if (res % n === 0) {
            return n;
        }
        return res % n;
    }
    return res;
}

console.log(saveThePrisoner(5,7,2));
