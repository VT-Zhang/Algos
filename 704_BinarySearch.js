/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = left + right >> 1;
        if (nums[middle] <= target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return right >= 0 && nums[right] === target ? right: -1;
}

console.log(search([-1,0,3,5,9,12], 2));
console.log(search([-1,0,3,5,9,12], 0));
console.log(search([-1,0,3,5,9,12], 9));
