// Given a non-empty integer array, find the minimum number of moves required 
// to make all array elements equal, where a move is incrementing a selected 
// element by 1 or decrementing a selected element by 1.

// You may assume the array's length is at most 10,000.

// Example:

// Input:
// [1,2,3]

// Output:
// 2

// Explanation:
// Only two moves are needed (remember each move increments or decrements one 
// element):

// [1,2,3]  =>  [2,2,3]  =>  [2,2,2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    var sorted = nums.sort();
    console.log(sorted);
    var length = sorted.length;
    if(length % 2 === 1){
        var med = sorted[(length+1)/2-1];
    }
    else{
        med = sorted[length/2];
    }
    console.log(med);
    var result = 0;
    for(let i = 0; i < nums.length; i++){
        result += Math.abs(med - nums[i]);
    }
    console.log(result);
    return result;
};

minMoves2([1,2,4]);
minMoves2([1,0,0,8,6]);
minMoves2([1,3,0,0,8,6]);