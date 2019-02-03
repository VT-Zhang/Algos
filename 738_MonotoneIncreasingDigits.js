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
function monotoneIncreasingDigits(N) {
    let res = 0;
    let case9 = false;
    let m = 1;
    while (N) {
        let val = N % 10 - case9;
        N = Math.floor(N / 10);
        let next = N % 10;
        case9 = val < next;
        res = case9 ? m * 10 - 1 : res + val * m;
        m *= 10;
    }
    return res;
}

console.log(monotoneIncreasingDigits(1234));
console.log(monotoneIncreasingDigits(332));
console.log(monotoneIncreasingDigits(10));
console.log(monotoneIncreasingDigits(9));
console.log(monotoneIncreasingDigits(12));
console.log(monotoneIncreasingDigits(21));
console.log(monotoneIncreasingDigits(11));

