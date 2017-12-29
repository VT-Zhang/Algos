// Given a group of two strings, you need to find the longest uncommon 
// subsequence of this group of two strings. The longest uncommon subsequence 
// is defined as the longest subsequence of one of these strings and this 
// subsequence should not be any subsequence of the other strings.

// A subsequence is a sequence that can be derived from one sequence by 
// deleting some characters without changing the order of the remaining 
// elements. Trivially, any string is a subsequence of itself and an empty 
// string is a subsequence of any string.

// The input will be two strings, and the output needs to be the length of 
// the longest uncommon subsequence. If the longest uncommon subsequence 
// doesn't exist, return -1.

// Example 1:
// Input: "aba", "cdc"
// Output: 3
// Explanation: The longest uncommon subsequence is "aba" (or "cdc"), 
// because "aba" is a subsequence of "aba", 
// but not a subsequence of any other strings in the group of two strings. 
// Note:

// Both strings' lengths will not exceed 100.
// Only letters from a ~ z will appear in input strings.

var findLUSlength = function(a, b) {
    var max = 0;
    if(a.length >= b.length){
        var str1 = "";
        for(var i = 0; i < a.length; i++) {
            str1 += a[i];
            var str2 = "";
            for(var j = 0; j < str1.length; j++) {
                str2 += b[j];
                console.log(str1);
                console.log(str2);
                console.log("*****");
                if(str2.length == str1.length && str2 != str1) {
                    if(str2.length > max) {
                        max = str2.length;
                    }
                }
            }
        }
    }
    else {
        var str1 = "";
        for(var k = 0; k < b.length; k++) {
            str1 += b[k];
            var str2 = "";
            for(var l = 0; l < str1.length; l++) {
                str2 += a[l];
                console.log(str1);
                console.log(str2);
                console.log("*****");
                if(str2.length == str1.length && str2 != str1) {
                    if(str2.length > max) {
                        max = str2.length;
                    }
                }
            }
        }
    }
    if(max == 0){
        return -1;
    }
    return max;
};

// console.log(findLUSlength('abcd', 'abcd'));
// console.log(findLUSlength('abc', 'cdc'));
// console.log(findLUSlength('a', 'b'));
console.log(findLUSlength("aefawfawfawfaw","aefawfeawfwafwaef"));