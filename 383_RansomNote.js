// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
//
//     Each letter in the magazine string can only be used once in your ransom note.
//
//     Note:
// You may assume that both strings contain only lowercase letters.
//
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var dict = {};
    for(var i = 0; i < magazine.length; i++) {
        if(!dict[magazine[i]]) {
            dict[magazine[i]] = 1;
        }
        else {
            dict[magazine[i]]++;
        }
    }
    for(var j = 0; j < ransomNote.length; j++) {
        if(!dict[ransomNote[j]]) {
            return false;
        }
        else {
            dict[ransomNote[j]]--;
        }
    }
    for(var key in dict) {
        if(dict[key] < 0) {
            return false;
        }
    }
    return true;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));