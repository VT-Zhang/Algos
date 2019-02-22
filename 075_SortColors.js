/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    let low = 0;
    let high = nums.length - 1;
    let temp;
    for (let i = 0; i <= high;) {
        if (nums[i] === 0) {
            temp = nums[i];
            nums[i] = nums[low];
            nums[low] = temp;
            i++;
            low++;
        } else if (nums[i] === 2) {
            temp = nums[i];
            nums[i] = nums[high];
            nums[high] = temp;
            high--;
        } else {
            i++;
        }
    }
    console.log(nums);
}

console.log(sortColors([2,0,2,1,1,0]));
