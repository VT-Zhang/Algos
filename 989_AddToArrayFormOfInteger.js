/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
function addToArrayForm(A, K) {
    let flag = A.length - 1;
    while (K) {
        if (flag < 0) {
            A.unshift(K % 10);
        } else {
            K += A[flag];
            A[flag--] = K % 10;
        }
        K = Math.floor(K/10);
    }
    return A;
}

console.log(addToArrayForm([1,2,0,0], 34));