// There are two sorted arrays nums1 and nums2 of size m and n respectively.
//
//     Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
//
//     Example 1:
// nums1 = [1, 3]
// nums2 = [2]
//
// The median is 2.0
// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
//
// The median is (2 + 3)/2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
    nums1.forEach(function(num) {
        nums2.push(num);
    });
    nums2.sort(function(a, b) {
        return a - b;
    });
    console.log(nums2);
    if (nums2.length % 2 === 1) {
        return nums2[Math.floor(nums2.length / 2)];
    }
    return (nums2[nums2.length / 2] + nums2[nums2.length / 2 - 1]) / 2;
}

console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([1, 3], [2]));