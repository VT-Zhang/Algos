// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//
//     Integers in each row are sorted in ascending from left to right.
//     Integers in each column are sorted in ascending from top to bottom.
//     For example,
//
//     Consider the following matrix:
//
//     [
//         [1,   4,  7, 11, 15],
//         [2,   5,  8, 12, 19],
//         [3,   6,  9, 16, 22],
//         [10, 13, 14, 17, 24],
//         [18, 21, 23, 26, 30]
//     ]
// Given target = 5, return true.
//
//     Given target = 20, return false.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
    if (!matrix || matrix.length < 1 || matrix[0].length < 1) {
        return false;
    }
    var col = matrix[0].length - 1;
    var row = 0;
    while (col >= 0 && row <= matrix.length - 1) {
        if (target === matrix[row][col]) {
            return true;
        } else if (target < matrix[row][col]) {
            col--;
        } else if (target > matrix[row][col]) {
            row++;
        }
    }
    return false;
}

var matrix = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];

var m2 = [
    [1,4,7,11,15],
    [2,5,8,12,19],
    [3,6,9,16,22],
    [10,13,14,17,24],
    [18,21,23,26,30]
];
console.log(searchMatrix(matrix, 5));
console.log(searchMatrix(matrix, 20));
console.log(searchMatrix(matrix, 31));
console.log(searchMatrix(matrix, 0));
console.log(searchMatrix(matrix, 4));



