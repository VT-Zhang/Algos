// https://www.hackerrank.com/challenges/diagonal-difference/problem
//
//     Given a square matrix, calculate the absolute difference between the sums of its diagonals.
//
//     Input Format
//
// The first line contains a single integer,  denoting the number of rows and columns in the matrix .
//     The next  lines denote the matrix 's rows, with each line containing  space-separated integers describing the columns.
//
// Constraints
//
// Output Format
//
// Print the absolute difference between the sums of the matrix's two diagonals as a single integer.
//
// Sample Input
//
// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output
//
// 15
// Explanation
//
// The primary diagonal is:
//
//     11
// 5
// -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4
//
// The secondary diagonal is:
//
//     4
// 5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15
//
// Note: |x| is the absolute value of x

function diagonalDifference(a) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (i === j) {
                sum1 += a[i][j];
            }
            if (i + j === a.length - 1) {
                sum2 += a[i][j];
            }
        }
    }
    return Math.abs(sum1 - sum2);
}

let matrix = [
    [11,2,4],
    [4,5,6],
    [10,8,-12]
];

console.log(diagonalDifference(matrix));