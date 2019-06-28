/**
 * @param {number[]} A
 * @return {number}
 */
function sumSubarrayMins(A) {
    let mod = 1e9 + 7;
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        let left = i - 1;
        let right = i + 1;
        while (left >= 0 && A[left] >= A[i]) {
            left--;
        }
        while (right < A.length && A[right] > A[i]) {
            right++;
        }
        sum = (sum + (right - i) * (i - left) * A[i] % mod) % mod;
    }
    return sum;
}

console.log(sumSubarrayMins([3, 1, 2, 4]));

