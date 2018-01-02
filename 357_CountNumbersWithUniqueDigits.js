// Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.
//
//     Example:
// Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100, excluding [11,22,33,44,55,66,77,88,99])
//
// Credits:
//     Special thanks to @memoryless for adding this problem and creating all test cases.

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if(n == 0){
        return 1;
    }
    if(n == 1){
        return 10;
    }
    var counter = 10;
    var dupe = 9;
    for(var i = 1; i < n && i < 10; i++) {
        dupe *= 10 - i;
        counter += dupe;
    }
    return counter;
};

console.log(countNumbersWithUniqueDigits(0));
console.log(countNumbersWithUniqueDigits(1));
console.log(countNumbersWithUniqueDigits(2));
console.log(countNumbersWithUniqueDigits(3));
console.log(countNumbersWithUniqueDigits(10));