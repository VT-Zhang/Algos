// Given a non-empty array of integers, return the third maximum number in this
// array. If it does not exist, return the maximum number. The time complexity must
//  be in O(n).
//
// Example 1:
// Input: [3, 2, 1]
//
// Output: 1
//
// Explanation: The third maximum is 1.
// Example 2:
// Input: [1, 2]
//
// Output: 2
//
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
// Example 3:
// Input: [2, 2, 3, 1]
//
// Output: 1
//
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.

var thirdMax = function(nums) {
    var dict = {};
    var res = [];
    for(var i = 0; i < nums.length; i++) {
       if(dict[nums[i]]) {
           dict[nums[i]]++;
       }
       else {
           dict[nums[i]] = 1;
       }
    }
    console.log(dict);
    for(var key in dict) {
        res.push(parseInt(key));
    }
    res.sort(function (a, b) {
        return a - b;
    });
    console.log(res);
    if(res.length > 2) {
        return res[res.length - 3];
    }
    if(res.length == 2) {
        return res[1];
    }
    else {
        return res[0];
    }
};
console.log(thirdMax([3,2,1]));
console.log(thirdMax([2,2,3,1]));
console.log(thirdMax([2,1]));
console.log(thirdMax([1]));
console.log(thirdMax([4,2,1,3]));
console.log(thirdMax([4,2,1,3,5,6]));
console.log(thirdMax([-2147483648,1,1]));