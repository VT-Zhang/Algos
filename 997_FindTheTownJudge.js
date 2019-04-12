/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge(N, trust) {
    let heTrust = new Array(N + 1).fill(0);
    let trustHim = new Array(N + 1).fill(0);
    for (let i = 0; i < trust.length; i++) {
        heTrust[trust[i][0]]++;
        trustHim[trust[i][1]]++;
    }
    let res = [];
    let maxTrust = N - 1;
    for (let i = 1; i <= N; i++) {
        if (heTrust[i] === 0 && trustHim[i] === maxTrust) {
            res.push(i);
        }
    }
    return res.length === 1 ? res[0] : -1
}

console.log(findJudge(3, [[1,3],[2,3],[3,1]]));
console.log(findJudge(3, [[1,3],[2,3]]));
