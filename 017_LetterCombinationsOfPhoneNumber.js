// Given a digit string, return all possible letter combinations that the number could represent.
//
//     A mapping of digit to letters (just like on the telephone buttons) is given below.
//
//
//
//     Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
//     Note:
// Although the above answer is in lexicographical order, your answer could be in any order you want.
//

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var res = [];
    if(digits.length == 0) {
        return res;
    }
    var dict = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "qprs",
        8: "tuv",
        9: "wxyz"
    };

    function ntl(digits, index, curr) {
        if(index == digits.length) {
            res.push(curr);
            return;
        }
        var letters = dict[digits[index]];
        for(var i = 0; i < letters.length; i++) {
            ntl(digits, index + 1, curr + letters[i]);
        }
    }

    ntl(digits, 0, "");
    return res;

};
console.log(letterCombinations("234"));