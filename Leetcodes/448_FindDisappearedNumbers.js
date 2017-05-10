var findDisappearedNumbers = function(nums) {
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
    for(var k=0; k<nums.length; k++){
        if(nums[k]=nums[k+1]){
            nums.splice(k,1);
        }
    }
    console.log(nums);
};

findDisappearedNumbers([4,3,2,7,8,2,3,1]);
