/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
    nums = nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length - 3; i++) {
        let firstNum = nums[i];
        if (i > 0 && firstNum === nums[i - 1]) {
            continue;
        }
        let l = i + 1;
        let f = nums.length - 1;
        while (l < f - 1) {
            let leftNum = nums[l];
            if (l - i > 1 && leftNum === nums[l - 1]) {
                l++;
                continue;
            }
            let r = l + 1;
            while (r < f) {
                let rightNum = nums[r];
                let finalNum = nums[f];
                if (r - l > 1 && rightNum === nums[r - 1]) {
                    r++;
                    continue;
                }
                let sum = firstNum + leftNum + rightNum + finalNum;
                if (sum === target) {
                    res.push([firstNum, leftNum, rightNum, finalNum]);
                }
                if (sum > target) {
                    f--;
                } else {
                    r++;
                }
            }
            l++;
        }
    }
    return res;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
