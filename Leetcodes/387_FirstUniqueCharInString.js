// Given a string, find the first non-repeating character in it and return it's index.
// If it doesn't exist, return -1.
//
// Examples:
//
// s = "leetcode"
// return 0.
//
// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

var firstUniqChar = function(s) {
    var counter = 0;
    for(var i=0; i<s.length; i++){
        for(var j=0; j<s.length; j++){
            if(s[i]===s[j]){
                counter++;
            }
        }
        if(counter===1){
            console.log(i);
            return i;
        }
        counter = 0;
    }
    console.log(-1);
    return -1;
};

firstUniqChar("leetcode");
firstUniqChar("loveleetcode");
firstUniqChar("");
firstUniqChar("cc");
