// You are a professional robber planning to rob houses along a street.
//  Each house has a certain amount of money stashed, the only constraint 
//  stopping you from robbing each of them is that adjacent houses have 
//  security system connected and it will automatically contact the police 
//  if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money 
// of each house, determine the maximum amount of money you can rob tonight 
// without alerting the police.

var rob = function(nums) {
    var result1 = 0;
    var result2 = 0;
    for(var i = 0; i < nums.length; i++){
        if(i % 2 === 0){
            result1 += nums[i];
            if(result1 < result2){
                result1 = result2;
            }
        }
        else{
            result2 += nums[i];
            if(result2 < result1){
                result2 = result1;
            }
        }
    }
    if(result1 > result2){
        console.log("1 "+result1);
        return result1;
    }
    else{
        console.log("2 "+result2);
        return result2;
    }
};

rob([1,5,3,1,5,6,1,2,3,2]);