// Given a string, sort it in decreasing order based on the frequency of characters.
//
//     Example 1:
//
// Input:
//     "tree"
//
// Output:
//     "eert"
//
// Explanation:
//     'e' appears twice while 'r' and 't' both appear once.
//     So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
//     Example 2:
//
// Input:
//     "cccaaa"
//
// Output:
//     "cccaaa"
//
// Explanation:
//     Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
//     Note that "cacaca" is incorrect, as the same characters must be together.
//     Example 3:
//
// Input:
//     "Aabb"
//
// Output:
//     "bbAa"
//
// Explanation:
//     "bbaA" is also a valid answer, but "Aabb" is incorrect.
//     Note that 'A' and 'a' are treated as two different characters.

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var res = "";
    var map = {};
    var counter = 0;
    for(var i = 0; i < s.length; i++) {
        if(map[s[i]]) {
            map[s[i]]++;
        }
        else {
            map[s[i]] = 1;
            counter++;
        }
    }
    // console.log(map);
    // console.log(counter);
    var dict = Object.assign({}, map);
    var arr = [];
    for(var j = 0; j < counter; j++ ) {
        var max = 0;
        for(var key in map) {
            if(max < map[key]) {
                max = map[key];
            }
        }
        if(max != 0) {
            arr.push(max);
        }
        for(var k in map) {
            if(map[k] == max) {
                map[k] = -1;
            }
        }
    }
    // console.log(map);
    // console.log(dict);
    // console.log(arr);
    for(var m = 0; m < arr.length; m++) {
        for(var n in dict) {
            if(dict[n] == arr[m]) {
                for(var p = 0; p < arr[m]; p++) {
                    res += n;
                }
                dict[n] = -1;
            }
        }
    }
    return res;
};
console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));