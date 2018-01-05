// Given a non-negative integer N, find the largest number that is less than or equal to N with monotone increasing digits.
//
// (Recall that an integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y.)
//
// Example 1:
// Input: N = 10
// Output: 9
// Example 2:
// Input: N = 1234
// Output: 1234
// Example 3:
// Input: N = 332
// Output: 299
// Note: N is an integer in the range [0, 10^9].

/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    if(N <= 10) {
        return N - 1;
    }
    for(var i = N; i >= 0; i--) {
        var num = i.toString();
        for(var j = 0; j < num.length - 1; j++) {
            if(parseInt(num[j]) > num[j+1]) {
                break;
            }
            if(j == num.length - 2) {
                return parseInt(num);
            }
        }
    }
};

console.log(monotoneIncreasingDigits(1234));
console.log(monotoneIncreasingDigits(332));
console.log(monotoneIncreasingDigits(10));
console.log(monotoneIncreasingDigits(9));
console.log(monotoneIncreasingDigits(12));
console.log(monotoneIncreasingDigits(21));
console.log(monotoneIncreasingDigits(11));

