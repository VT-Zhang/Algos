// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
// Example 1:
// Input: "abab"
//
// Output: True
//
// Explanation: It's the substring "ab" twice.
// Example 2:
// Input: "aba"
//
// Output: False
// Example 3:
// Input: "abcabcabcabc"
//
// Output: True
//
// Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    var m = s.length;
    for(var p = 1; p < m / 2 + 1; p++) {
        for (var i = 0; i < m - p; i ++) {
            if(s[i] != s[i+p]) {
                break;
            }
            if(m % p == 0 && i == m - p -1) {
                return true;
            }
        }
    }
    return false;
};

console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("aba"));
console.log(repeatedSubstringPattern("abcabcabcabc"));