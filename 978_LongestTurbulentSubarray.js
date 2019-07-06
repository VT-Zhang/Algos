/**
 * @param {number[]} A
 * @return {number}
 */
function maxTurbulenceSize(A) {
    let case1 = new Array(A.length).fill(1);
    let case2 = new Array(A.length).fill(1);
    let max = 1;

    for (let i = 1; i < A.length; i++) {
        if (i % 2 === 1) {
            if (A[i] < A[i-1]) {
                case1[i] = case1[i-1] + 1;
            } else if (A[i] > A[i-1]) {
                case2[i] = case2[i-1] + 1;
            }
        } else {
            if (A[i] > A[i-1]) {
                case1[i] = case1[i-1] + 1;
            } else if (A[i] < A[i-1]) {
                case2[i] = case2[i-1] + 1;
            }
        }
        max = Math.max(max, case1[i], case2[i]);
    }
    return max;
}

console.log(maxTurbulenceSize([9,4,2,10,7,8,8,1,9]));
console.log(maxTurbulenceSize([4,8,12,16]));
console.log(maxTurbulenceSize([100]));
