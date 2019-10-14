/**
 * @param {number[]} nums
 * @return {number[]}
 */
function countSmaller(nums) {
    let n = nums.length, sortedArr = [], res = [];
    for (let i = n - 1; i >= 0; i--) {
        let sn = sortedArr.length;
        let left = 0, right = sn - 1;
        while (left <= right) {
            let m = Math.floor((left + right) / 2);
            sortedArr[m] >= nums[i] ? right = m - 1 : left = m + 1;
        }
        left = Math.min(sn, left);
        res.push(left);
        sortedArr.splice(left, 0, nums[i]);
    }
    res.reverse();
    return res;
}

console.log(countSmaller([5,2,6,1]));
