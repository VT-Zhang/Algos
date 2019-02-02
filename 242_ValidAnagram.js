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
function isAnagram(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
}


console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "cat"));
console.log(isAnagram("ab", "a"));
