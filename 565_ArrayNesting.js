/**
 * @param {number[]} nums
 * @return {number}
 */
function arrayNesting(nums) {
    let len = nums.length, i, max = 0, count = 0;
    let set = new Set();
    for (i = 0; i < len; i++) {
        while (set.has(i) === false) {
            set.add(i);
            i = nums[i];
            count++;
        }
        max = max > count ? max : count;
        count = 0;
    }
    return max;
}

console.log(arrayNesting([5, 4, 0, 3, 1, 6, 2]));
