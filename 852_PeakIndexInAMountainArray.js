/**
 * @param {number[]} A
 * @return {number}
 */
function peakIndexInMountainArray(A) {
    let peakValue = 0;
    let peakIndex;
    for (let i = 0; i < A.length; i++) {
        if (peakValue < A[i]) {
            peakValue = A[i];
            peakIndex = i;
        }
    }
    return peakIndex
}

console.log(peakIndexInMountainArray([0,2,1,0]));
