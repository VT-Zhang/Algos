// Given a binary array, find the maximum number of consecutive 1s in this array.
//
// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:
//
// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000

function findMaxConsecutiveOnes (nums) {
    var counter = 0;
    var arr = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            counter++;
        }
        console.log(counter);
        if (nums[i] === 0) {
            arr.push(counter);
            counter = 0;
        }
    }
    arr.push(counter);
    console.log(arr);
    var max = arr[0];
    for (var j = 0; j < arr.length; j++) {
        if (max < arr[j]) {
            max = arr[j];
        }
    }
    return max;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
