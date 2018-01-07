// Given a 32-bit signed integer, reverse digits of an integer.
//
//     Example 1:
//
// Input: 123
// Output:  321
// Example 2:
//
// Input: -123
// Output: -321
// Example 3:
//
// Input: 120
// Output: 21
// Note:
//     Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range.
//     For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var str = x.toString();
    var temp = "";
    if(str[0] == "-") {
        temp += "-";
    }
    // console.log(str);
    for(var i = str.length - 1; i >= 0; i--) {
        if(str[i] != "-") {
            temp += str[i];
        }
    }
    // console.log(temp);
    var res = parseInt(temp);
    if(res < -2147483648 || res > 2147483648) {
        return 0;
    }
    return res;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
console.log(reverse(1534236469));