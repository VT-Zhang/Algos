/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function fairCandySwap(A, B) {
    let sumA = 0;
    let sumB = 0;
    let res = [];
    for (let item of A) {
        sumA += item;
    }
    for (let item of B) {
        sumB += item;
    }
    let mean = (sumA + sumB) / 2;
    for (let i = 0; i < A.length; i++) {
        let t = sumA - A[i];
        let s = mean - t;
        if (B.indexOf(s) >= 0 && (sumB - s + A[i]) === mean) {
            res.push(A[i]);
            res.push(s);
            break;
        }
    }
    return res;
}

console.log(fairCandySwap([1,1], [2,2]));
console.log(fairCandySwap([1,2], [2,3]));
console.log(fairCandySwap([1,2,5], [2,4]));
