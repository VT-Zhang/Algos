function bubbleSort(nums) {
    let count = 0;
    while (count < nums.length) {
        for (let i = 0; i < nums.length; i++) {
            let temp;
            if (nums[i] > nums[i + 1]) {
                temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
            }
        }
        count++;
    }
    return nums;
}

console.log(bubbleSort([5, 6, 2, 4, 7, 1, 3, 8]));
