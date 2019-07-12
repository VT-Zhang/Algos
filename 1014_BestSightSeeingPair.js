/**
 * @param {number[]} A
 * @return {number}
 */
function maxScoreSightseeingPair(A) {
    let max = A[0];
    let res = 0;
    for (let i = 1; i < A.length; i++) {
        res = Math.max(res, max - i + A[i]);
        max = Math.max(max, A[i] + i);
    }
    return res;
}

console.log(maxScoreSightseeingPair([8,1,5,2,6]));
