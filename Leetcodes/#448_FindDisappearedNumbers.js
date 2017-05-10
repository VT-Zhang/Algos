var findDisappearedNumbers = function(nums) {
    //sort the array first
    for(var i=0; i<nums.length; i++){
        var min = i;
        for(var j=i; j<nums.length; j++){
            if(nums[min]>nums[j]){
                min = j;
            }
        }
        if(min != i){
            var temp = nums[i];
            nums[i] = nums[min];
            nums[min] = temp;
        }
    }
    //remove the duplicated elements
    for(var k=0; k<nums.length; k++){
        if(nums[k] == nums[k+1]){
            nums.splice(k,1);
        }
    }
    //find the missing numbers
    var result = [];
    for(var l=0;l<nums.length; l++){
        if(nums[l] != l+1){
            // nums.splice(0,0,10);
            result.push(nums[l-1]+1);
        }
    }
    console.log(nums);
    console.log(result);
};

findDisappearedNumbers([4,3,2,7,8,2,3,1]);
