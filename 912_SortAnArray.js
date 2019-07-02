/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    let left = [], right = [];
    let pivotIndex = Math.floor(nums.length / 2);
    let pivot = nums.splice(pivotIndex, 1)[0];
    for (let num of nums) {
        if (num < pivot) {
            left.push(num);
        } else {
            right.push(num);
        }
    }
    return sortArray(left).concat([pivot], sortArray(right));
}

console.log(sortArray([5, 2, 3, 1]));
console.log(sortArray([5, 1, 1, 2, 0, 0]));
