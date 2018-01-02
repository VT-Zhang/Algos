// Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.
//
//     Note that it is the kth smallest element in the sorted order, not the kth distinct element.
//
//     Example:
//
// matrix = [
//     [ 1,  5,  9],
//     [10, 11, 13],
//     [12, 13, 15]
// ],
//     k = 8,
//
// return 13.
// Note:
//     You may assume k is always valid, 1 ≤ k ≤ n2.

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    var arr = [];
    for(var i = 0; i < matrix.length; i++) {
        for(var j = 0; j < matrix[i].length; j++) {
            arr.push(matrix[i][j]);
        }
    }
    arr.sort(function (a, b) {
       return a - b;
    });
    console.log(arr);
    return arr[k - 1];
};

console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]],8));
