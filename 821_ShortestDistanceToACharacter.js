// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.
//
//     Example 1:
//
// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
//
//
// Note:
//
//     S string length is in [1, 10000].
//     C is a single character, and guaranteed to be in string S.
//     All letters in S and C are lowercase.

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
function shortestToChar(S, C) {
    var res = [];
    var arr = [];
    for (var i = 0; i < S.length; i++) {
        if (S[i] === C) {
            arr.push(i);
        }
    }
    console.log(arr);
    for (var j = 0; j < S.length; j++) {
        var minDistance = 10001;
        for (var k = 0; k < arr.length; k++) {
            if (Math.abs(arr[k] - j) < minDistance) {
                minDistance = Math.abs(arr[k] - j);
            }
        }
        res.push(minDistance);
    }
    return res;
};

console.log(shortestToChar("loveleetcode", "e"));