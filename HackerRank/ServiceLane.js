// https://www.hackerrank.com/challenges/service-lane/problem

function serviceLane(width, cases) {
    let res = [];
    for (let i = 0; i < cases.length; i++) {
        let min = Number.MAX_VALUE;
        for (let j = cases[i][0]; j <= cases[i][1]; j++) {
            min = Math.min(min, width[j]);
        }
        res.push(min);
    }
    return res;
}

console.log(serviceLane([2,3,1,2,3,2,3,3], [[0,3], [4,6], [6,7]]));
