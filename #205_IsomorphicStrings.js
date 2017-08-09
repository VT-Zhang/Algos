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
    var s_dict = {};
    var t_dict = {};
    for(let i=0;i<s.length;i++){
        if(!s_dict[s[i]]){
            s_dict[s[i]] = 1;
        }
        else{
            s_dict[s[i]] += 1;
        }
    }
    for(let i=0;i<t.length;i++){
        if(!t_dict[t[i]]){
            t_dict[t[i]] = 1;
        }
        else{
            t_dict[t[i]] += 1;
        }
    }
    console.log(s_dict);
    console.log(t_dict);
};
isIsomorphic("paper", "title");
