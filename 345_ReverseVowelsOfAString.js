// Write a function that takes a string as input and reverse only the vowels of a string.
//
//     Example 1:
// Given s = "hello", return "holle".
//
//     Example 2:
// Given s = "leetcode", return "leotcede".
//
//     Note:
// The vowels does not include the letter "y".

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var mySet = new Set();
    mySet.add("a");
    mySet.add("e");
    mySet.add("i");
    mySet.add("o");
    mySet.add("u");
    mySet.add("A");
    mySet.add("E");
    mySet.add("I");
    mySet.add("O");
    mySet.add("U");
    var arr = [];
    var s_array = [];
    for(var i = 0; i < s.length; i ++) {
        if(mySet.has(s[i])) {
            arr.push(i);
        }
        s_array.push(s[i]);
    }
    for(var j = 0; j < arr.length/2; j++) {
        var temp = s_array[arr[j]];
        s_array[arr[j]] = s_array[arr[arr.length-1-j]];
        s_array[arr[arr.length-1-j]] = temp;
    }
    var res = "";
    for(var k = 0; k < s_array.length; k++) {
        res += s_array[k];
    }
    return res;
};

console.log(reverseVowels("aA"));