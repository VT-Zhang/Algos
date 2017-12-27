// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
//
//
// American keyboard
//
//
// Example 1:
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]
// Note:
//     You may use one character in the keyboard more than once.
//     You may assume the input string will only contain letters of alphabet.

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var first = ["Q", "q", "W", "w", "E", "e", "R", "r", "T", "t", "Y", "y", "U", "u", "I", "i", "O", "o", "P", "p"];
    var second = ["A", "a", "S", "s", "D", "d", "F", "f", "G", "g", "H", "h", "J", "j", "K", "k", "L", "l"];
    var third = ["Z", "z", "X", "x", "C", "c", "V", "v", "B", "b", "N", "n", "M", "m"];
    var line1 = new Set(first);
    var line2 = new Set(second);
    var line3 = new Set(third);
    var arr = [line1, line2, line3];
    var res = [];
    for(var i = 0; i < words.length; i++) {
        var flag = true;
        for(var j = 0; j < words[i].length; j++) {
            for(var k = 0; k < arr.length; k++){
                if(arr[k].has(words[i][j])){
                    for(var l = 0; l < words[i].length; l++) {
                        if(arr[k].has(words[i][l])) {
                            flag = true;
                        }
                        else {
                            flag = false;
                            break;
                        }
                    }
                }
            }
        }
        if(flag) {
            res.push(words[i]);
        }
    }
    return res;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
console.log(findWords(["a","b"]));
console.log(findWords(["qz","wq","asdddafadsfa","adfadfadfdassfawde"]));
console.log(findWords(["asdfghjkla","qwertyuiopq","zxcvbnzzm"]));