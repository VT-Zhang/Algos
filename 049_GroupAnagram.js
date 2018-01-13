// Given an array of strings, group anagrams together.
//
//     For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
//     Return:
//
// [
//     ["ate", "eat","tea"],
//     ["nat","tan"],
//     ["bat"]
// ]
// Note: All inputs will be in lower-case.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var arr = [];
    var map = {};
    strs.forEach(function(item) {
       var str = item.split('').sort().join('');
       console.log(str);
       if(map[str] == null) {
           map[str] = arr.length;
           arr.push([item]);
       }
       else {
           arr[map[str]].push(item);
       }
       console.log(map);
       console.log(arr);
    });
    return arr;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

