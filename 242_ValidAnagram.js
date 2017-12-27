// Given two strings s and t, write a function to determine if t is an anagram of s.
//
//     For example,
//     s = "anagram", t = "nagaram", return true.
//     s = "rat", t = "car", return false.
//
//     Note:
// You may assume the string contains only lowercase alphabets.
//
//     Follow up:
//     What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(t.length > s.length) {
        return false;
    }
    var dict_s = {};
    for(var i = 0; i < s.length; i++) {
        if(!dict_s[s[i]]) {
            dict_s[s[i]] = 1;
        }
        else {
            dict_s[s[i]]++;
        }
    }
    var dict_t = {};
    for(var j = 0; j < t.length; j++) {
        if(!dict_t[t[j]]) {
            dict_t[t[j]] = 1;
        }
        else {
            dict_t[t[j]]++;
        }
    }
    console.log(dict_t);
    for(var name in dict_t) {
        if(!(name in dict_s)) {
            return false;
        }
    }
    for(var k = 0; k < t.length; k++) {
        dict_s[t[k]]--;
    }
    for(var key in dict_s) {
        if(dict_s[key] < 0) {
            return false;
        }
    }
    console.log(dict_s);
    return true;
};

console.log(isAnagram("anagram", "nagram"));
console.log(isAnagram("rat", "cat"));
console.log(isAnagram("ab", "a"));