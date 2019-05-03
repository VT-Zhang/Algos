/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
function containsNearbyAlmostDuplicate(nums, k, t) {
    if (k > 2 * t) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            for (let j = nums[i] - t; j <= nums[i] + t; j++) {
                if (map.has(j) && i - map.get(j) <= k) {
                    return true;
                }
            }
            map.set(nums[i], i);
        }
        return false;
    } else {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i - k < 0 ? 0 : i - k; j < i; j++) {
                if (Math.abs(nums[j] - nums[i]) <= t) {
                    return true;
                }
            }
        }
        return false;
    }
}

console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0));
console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2));
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3));
