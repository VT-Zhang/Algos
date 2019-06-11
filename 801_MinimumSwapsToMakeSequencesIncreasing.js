/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
function minSwap(A, B) {
    let swapRecord = 1, fixRecord = 0;
    for (let i = 1; i < A.length; i++) {
        if (A[i-1] >= B[i] || B[i-1] >= A[i]) {
            swapRecord++;
        } else if (A[i-1] >= A[i] || B[i-1] >= B[i]) {
            let temp = swapRecord;
            swapRecord = fixRecord + 1;
            fixRecord = temp;
        } else {
            let min = Math.min(swapRecord, fixRecord);
            swapRecord = min + 1;
            fixRecord = min;
        }
    }
    return Math.min(swapRecord, fixRecord);
}

console.log(minSwap([1,3,5,4], [1,2,3,7]));
