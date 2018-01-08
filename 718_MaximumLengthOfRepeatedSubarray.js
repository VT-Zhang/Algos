// Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.
//
//     Example 1:
// Input:
//     A: [1,2,3,2,1]
// B: [3,2,1,4,7]
// Output: 3
// Explanation:
//     The repeated subarray with maximum length is [3, 2, 1].
//     Note:
// 1 <= len(A), len(B) <= 1000
// 0 <= A[i], B[i] < 100

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    var setA = new Set();
    var setB = new Set();
    for(var i = 0; i < A.length; i++) {
        var temp = "";
        for(var j = i; j < A.length; j++) {
            temp += A[j].toString();
            setA.add(temp);
        }
    }
    console.log(setA);
    for(var m = 0; m < B.length; m++) {
        var str = "";
        for(var n = m; n < B.length; n++) {
            str += B[n].toString();
            setB.add(str);
        }
    }
    console.log(setB);
    var max = 0;
    for(var value of setA) {
        if(setB.has(value)) {
            max = Math.max(value.length, max);
        }
    }
    return max;
};

// console.log(findLength([1,2,3,2,1], [3,2,1,4,7]));
console.log(findLength([5,14,53,80,48], [50,47,3,80,83]));