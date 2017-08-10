// Given a string, your task is to count how many palindromic substrings 
// in this string.

// The substrings with different start indexes or end indexes are counted 
// as different substrings even they consist of same characters.

// Example 1:
// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:
// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

var isPalindromic = function(str){
    for(var i=0; i<str.length/2; i++){
        if(str[i] != str[str.length-1-i]){
            console.log(false);
            return false;
        } 
    }
    console.log(true);
    return true;
}
// isPalindromic('abcba');
// isPalindromic('abccba');
// isPalindromic('abc');
// isPalindromic('abccbaa');

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    var result = 0;
    var string = "";
    for(var i=0; i<s.length; i++){
        for(var j=i; j<s.length; j++){
             string += s[j];
             console.log(string);
             if(isPalindromic(string)==true){
                 result++;
             }
        }
        string = "";
    }
    console.log(result);
    return result;
};

countSubstrings('aba');
countSubstrings('aaa');

