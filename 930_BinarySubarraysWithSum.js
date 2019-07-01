/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
function numSubarraysWithSum(A, S) {
    let sumCountsBySum = new Array(A.length + 1).fill(0);
    let currentSum = 0;
    return A.reduce((count, n) => {
        sumCountsBySum[currentSum]++;
        currentSum += n;
        let compliment = currentSum - S;
        if (compliment > -1) {
            count += sumCountsBySum[compliment];
        }
        return count;
    }, 0);
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
