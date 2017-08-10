// Given two words word1 and word2, find the minimum number of steps required 
// to make word1 and word2 the same, where in each step you can delete one 
// character in either string.

// Example 1:
// Input: "sea", "eat"
// Output: 2
// Explanation: You need one step to make "sea" to "ea" and another step to 
// make "eat" to "ea".
// Note:
// The length of given words won't exceed 500.
// Characters in given words can only be lower-case letters.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if(word1 === ""){
        return word2.length;
    }
    if(word2 === ""){
        return word1.length;
    }
    var dict = {};
    var string = "";
    for(let i=0; i<word1.length; i++){
        for(let j=i; j<word1.length; j++){
            string += word1[j];
            if(!dict[string]){
                dict[string] = 1;
            }
            else{
                dict[string]++;
            }
            console.log(string);
        } 
        string = "";
    }
    console.log(dict);
    for(let i=0; i<word2.length; i++){
        for(let j=i; j<word2.length; j++){
            string += word2[j];
            if(!dict[string]){
                dict[string] = 1;
            }
            else{
                dict[string]++;
            }
            console.log(string);
        } 
        string = "";
    }
    console.log(dict);

    var arr = [];
    for(var key in dict){
        if(dict[key] === 2){
            arr.push(key);
        }
    }
    console.log(arr);
    if(arr.length === 0){
        return word1.length + word2.length;
    }
    var longgest = arr[0];
    for(let i=0; i< arr.length; i++){
        if(arr[i].length > longgest.length){
            longgest = arr[i];
        }
    }
    console.log(longgest);
    var result = (word1.length - longgest.length) + (word2.length - longgest.length);
    console.log(result);
    return result;

};

minDistance('sea', 'eat');
minDistance('sea', 'sea');