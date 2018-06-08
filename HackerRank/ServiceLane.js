// https://www.hackerrank.com/challenges/service-lane/problem

function serviceLane(n, cases) {
    let min = Number.MAX_VALUE;
    for (let i = n[0]; i <= n[1]; i++) {
        min = Math.min(cases[i], min);
    }
    return min;
}

console.log(serviceLane([0,3], [2,3,1,2,3,2,3,3]));