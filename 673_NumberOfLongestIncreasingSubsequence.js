/**
 * @param {number[]} nums
 * @return {number}
 */
function findNumberOfLIS(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return 1;
    }

    const N = nums.length;
    const len = new Array(N);
    const count = new Array(N);
    let maxLen = 0, res = 0;

    for (let i = 0; i < N; i++) {
        len[i] = 1;
        count[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (len[j] + 1 > len[i]) {
                    len[i] = len[j] + 1;
                    count[i] = count[j];
                } else if (len[j] + 1 === len[i]) {
                    count[i] += count[j];
                }
            }
        }
        if (len[i] === maxLen) {
            res += count[i];
        } else if (len[i] > maxLen) {
            maxLen = len[i];
            res = count[i];
        }
    }
    return res;
}

console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
console.log(findNumberOfLIS([2, 2, 2, 2, 2]));
