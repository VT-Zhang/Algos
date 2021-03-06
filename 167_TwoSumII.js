// Given an array of integers that is already sorted in ascending order, find two
// numbers such that they add up to a specific target number.
//
// The function twoSum should return indices of the two numbers such that they add
// up to the target, where index1 must be less than index2. Please note that your
// returned answers (both index1 and index2) are not zero-based.
//
// You may assume that each input would have exactly one solution and you may not
// use the same element twice.
//
// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2

var twoSum = function(numbers, target) {
    var left = 0;
    var right = numbers.length-1;
    while(left < right){
        var sum = numbers[left] + numbers[right];
        if(sum===target){
            console.log([left+1, right+1]);
            return [left+1, right+1];
        }
        else if (sum < target){
            left++;
        }
        else {
            right--;
        }
    }

    // for(var i=0;i<numbers.length;i++){
    //     for(var j=0; j<numbers.length;j++){
    //         if(numbers[i]+numbers[j]===target && i !== j){
    //             if(i < j){
    //                 console.log([i+1, j+1]);
    //                 return [i+1, j+1];
    //             }
    //             else{
    //                 console.log([j+1,i+1]);
    //                 return [j+1, i+1];
    //             }
    //         }
    //     }
    // }
};
twoSum([2,7,11,15], 9);
twoSum([2,3,4], 6);
twoSum([0,0,3,4], 0);
