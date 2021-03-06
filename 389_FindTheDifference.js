// Given two strings s and t which consist of only lowercase letters.
//
// String t is generated by random shuffling string s and then add one more
//letter at a random position.
//
// Find the letter that was added in t.
//
// Example:
//
// Input:
// s = "abcd"
// t = "abcde"
//
// Output:
// e
//
// Explanation:
// 'e' is the letter that was added.

var findTheDifference = function(s, t) {
    // add all the element from first string to a new dict, and set the value to 1;
    var dict = {};
    for(var i=0; i<s.length; i++){
        if(!dict[s[i]]){
            dict[s[i]] = 1;
        }
        else{
            dict[s[i]] += 1;
        }
    }
    console.log(dict);

    // check the second string, deduct 1 what in the first string,
    // add 1 to the new character;
    for(var j=0; j<t.length; j++){
        if(dict[t[j]]){
            dict[t[j]] -= 1;
        }
        else{
            dict[t[j]] = 1;
        }
    }
    console.log(dict);

    // return the key in the dict in which the value === 1;
    for(var key in dict){
        if (dict[key] === 1){
            console.log(key);
            return key;
        }
    }
};

findTheDifference("abcd", "abcde");
findTheDifference("abcd", "abicd");
findTheDifference("aa", "aaa");
