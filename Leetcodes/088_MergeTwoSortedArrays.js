// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//
// Note:
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold
// additional elements from nums2. The number of elements initialized in nums1 and nums2 are m
// and n respectively.

var merge = function(nums1, m, nums2, n) {
    var k = m + n - 1;
    var i = m - 1;
    var j = n - 1;
    while(i >= 0 && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[k--] = nums1[i--];

        }else {
            nums1[k--] = nums2[j--];
        }
    }
    while(j >= 0){
        nums1[k--] = nums2[j--];
    }
    while(i >= 0){
        nums1[k--] = nums1[i--];
    }
    console.log(nums1);
};

merge([1,3,5], 3, [2,4,6], 3);
