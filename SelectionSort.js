var selectionSort = function(nums) {
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
    console.log(nums);
    return nums;
};

selectionSort([4,3,2,7,8,2,3,1]);
