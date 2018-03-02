// Given an array of integers, every element appears twice except for one.
// Find that single one.

function singleNumber(nums) {
    var dict = {};
    for (var i = 0; i < nums.length; i++) {
        if (!dict[nums[i]]) {
            dict[nums[i]] = 1;
        } else {
            dict[nums[i]] += 1;
        }
    }
    for (var key in dict) {
        if (dict[key] !== 2) {
            return parseInt(key);
        }
    }
}

console.log(singleNumber([1, 3, 1, 4, 4, 3, 2, 5, 6, 6, 5]));
console.log(singleNumber([1, 1, 2, 2, 6, 6, 6]));
