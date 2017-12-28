// Given two strings s and t, determine if they are isomorphic.
//
// Two strings are isomorphic if the characters in s can be replaced to get t.
//
// All occurrences of a character must be replaced with another character while
// preserving the order of characters. No two characters may map to the same
// character but a character may map to itself.
//
// For example,
// Given "egg", "add", return true.
//
// Given "foo", "bar", return false.
//
// Given "paper", "title", return true.
//
// Note:
// You may assume both s and t have the same length.

var isIsomorphic = function(s, t) {
    var dict1 = {};
    var dict2 = {}
    var arr1 = [];
    var arr2 = [];
    var counter1 = 0;
    var counter2 = 0;
    for(var i = 0; i < s.length; i++) {
        if(!dict1[s[i]]) {
            counter1++;
            dict1[s[i]] = counter1;
            arr1.push(counter1);
        }
        else {
            arr1.push(dict1[s[i]]);
        }
    }
    console.log(dict1);
    console.log(arr1);
    for(var j = 0; j < t.length; j++) {
        if(!dict2[t[j]]) {
            counter2++;
            dict2[t[j]] = counter2;
            arr2.push(counter2);
        }
        else {
            arr2.push(dict2[t[j]]);
        }
    }
    console.log(dict2);
    console.log(arr2);
    for(var k = 0; k < s.length; k++) {
        if(arr1[k] != arr2[k]) {
            return false
        }
    }
    return true;
};

console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("egg", "foo"));
console.log(isIsomorphic("bar", "foo"));
