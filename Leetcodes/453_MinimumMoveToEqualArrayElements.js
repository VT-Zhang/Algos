// Given a non-empty integer array of size n, find the minimum number of moves
// required to make all array elements equal, where a move is incrementing n - 1
// elements by 1.
//
// Example:
//
// Input:
// [1,2,3]
//
// Output:
// 3
//
// Explanation:
// Only three moves are needed (remember each move increments two elements):
//
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

var minMoves = function(nums) {
    var result;
    //find max;
    var max = nums[0];
    for(var i=0; i<nums.length; i++){
        if(max < nums[i]){
            max = nums[i];
        }
    }
    //
    if(result > max && sum%nums.length===0 && )
};
