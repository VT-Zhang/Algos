// Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.
//
// Example:
//
//     Input:
//         [1,2,3]
//
// Output:
//     3
//
// Explanation:
//     Only three moves are needed (remember each move increments two elements):
//
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    var min = nums[0];
    var sum = 0;
    for(var i = 0; i < nums.length; i++){
        if(nums[i] < min){
            min = nums[i];
        }
        sum += nums[i];
    }
    console.log(min);
    console.log(sum);
    return sum - nums.length * min;
};

console.log(minMoves([1,2,3]));

