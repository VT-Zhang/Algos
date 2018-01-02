// Given a string, find the length of the longest substring without 
// repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that 
// the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 1) {
        return 1;
    }
    var max = 0;
    for(var i = 0; i < s.length; i++) {
        var set = new Set();
        for(var j = i; j < s.length; j++) {
            if(set.has(s[j])) {
                break;
            }
            set.add(s[j]);
            if(max < set.size) {
                max = set.size;
            }
            console.log(set);
            console.log(max);
        }
    }
    return max;
};

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("jbpnbwwd"));
console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring("a"));

