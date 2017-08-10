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
    if(s === ""){
        console.log(0);
        return 0;
    }
    if(s.length === 1){
        console.log(1);
        return 1;
    }
    // if(s.length === 2 && s[0] === s[1]){
    //     console.log(1);
    //     return 1
    // }
    // if(s.length === 2 && s[0] != s[1]){
    //     console.log(2);
    //     return 2;
    // }
    var dict = {};
    var string = "";
    var result = [];
    for(var i=0; i<s.length; i++){
        dict = {};
        string = "";
        for(var j=i; j<s.length; j++){
            if(!dict[s[j]]){
                dict[s[j]] = 1;
                string += s[j];
            }
            else{
                result.push(string);
                dict = {};
                string = ""; 
            }         
        } 
    }
    console.log(result);
    var res = result[0];
    for(var k=0; k<result.length; k++){
        if(res.length < result[k].length){
            res = result[k];
        }
    }
    console.log(res.length);
    return res.length;
};

lengthOfLongestSubstring("pwwkew");
// lengthOfLongestSubstring("abcabcbb");
// lengthOfLongestSubstring("");
// lengthOfLongestSubstring("jbpnbwwd");
// lengthOfLongestSubstring("au");
// lengthOfLongestSubstring("bwf");