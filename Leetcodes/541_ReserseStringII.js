// Given a string and an integer k, you need to reverse the first k characters 
// for every 2k characters counting from the start of the string. If there are 
// less than k characters left, reverse all of them. If there are less than 2k 
// but greater than or equal to k characters, then reverse the first k characters 
// and left the other as original.
// Example:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Restrictions:
// The string consists of lower English letters only.
// Length of the given string and k will in the range [1, 10000]

var reverseStr = function(s, k) {
    var ns = "";
    var counter = k - 1;
    for(var i = 0; i < s.length; i+=2){
        for(var j = i + counter; j > i; j--){
            ns += s[j];
        }
    }
    console.log(ns);
    return ns;
};

reverseStr("abcdefg", 2);