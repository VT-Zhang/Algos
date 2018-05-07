// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.
//
//     For convenience, the full table for the 26 letters of the English alphabet is given below:
//
//     [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.
//
// Return the number of different transformations among all words we have.
//
//     Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation:
//     The transformation of each word is:
//     "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
//
// There are 2 different transformations, "--...-." and "--...--.".
//
//
//     Note:
//
// The length of words will be at most 100.
// Each words[i] will have length in range [1, 12].
//     words[i] will only consist of lowercase letters.


/**
 * @param {string[]} words
 * @return {number}
 */
function uniqueMorseRepresentations(words) {
    var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    var map = {};
    var str = "";
    var arr = [];
    var res = new Set();
    for (var i = 0; i < letters.length; i++) {
        map[letters[i]] = codes[i];
    }
    for (var j = 0; j < words.length; j++) {
        var temp = "";
        for (var k = 0; k < words[j].length; k++) {
            console.log(map[words[j][k]]);
            temp += map[words[j][k]];
        }
        arr.push(temp);
    }
    console.log(arr);
    for (var l = 0; l < arr.length; l++) {
        res.add(arr[l]);
    }
    console.log(res);
    return res.size;
}

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
