/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function kConcatenationMaxSum(arr, k) {
    const MOD = 1000000007;
    let totalSum = 0, localMax = 0, globalMax = 0;

    arr.forEach((num) => {
        totalSum += num;
        localMax = Math.max(num, localMax + num);
        globalMax = Math.max(localMax, globalMax);
    });

    if (k === 1 || globalMax === 0) {
        return globalMax % MOD;
    }

    arr.forEach((num) => {
        localMax = Math.max(num, localMax + num);
        globalMax = Math.max(localMax, globalMax);
    });

    return globalMax + Math.max((k - 2) * totalSum, 0) % MOD;
}

console.log(kConcatenationMaxSum([1, 2], 3));
console.log(kConcatenationMaxSum([1, -2, 1], 5));
console.log(kConcatenationMaxSum([-1, -2], 7));
