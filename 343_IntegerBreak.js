// Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.
//
//     For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).
//
//     Note: You may assume that n is not less than 2 and not larger than 58.
//
// Credits:
//     Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n <= 3) {
        return n - 1;
    }
    if(n % 3 == 0) {
        return Math.pow(3, n/3);
    }
    if(n % 3 == 1) {
        return 4 * Math.pow(3, (n-4)/3);
    }
    if(n % 3 == 2) {
        return 2 * Math.pow(3, (n-2)/3);
    }
};

console.log(integerBreak(3));
console.log(integerBreak(4));
console.log(integerBreak(5));
console.log(integerBreak(6));
console.log(integerBreak(7));
console.log(integerBreak(8));
console.log(integerBreak(9));
console.log(integerBreak(10));
console.log(integerBreak(11));
