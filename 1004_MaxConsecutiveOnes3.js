/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function longestOnes(A, K) {
    let longest = 0, zeroCount = 0, start = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) {
            zeroCount++;
        }
        while (zeroCount > K) {
            if (A[start] === 0) {
                zeroCount--;
            }
            start++;
        }
        longest = Math.max(longest, i - start + 1);
    }
    return longest;
}

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));
