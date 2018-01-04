// Given a roman numeral, convert it to an integer.
//
//     Input is guaranteed to be within the range from 1 to 3999.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var res = 0;
    var map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    for(var i = 0; i < s.length; i++) {
        var value = map[s[i]];
        if(i == s.length - 1 || map[s[i+1]] <= map[s[i]]) {
            res += value;
        }
        else{
            res -= value;
        }
        console.log(res);
    }
    return res;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("XII"));
console.log(romanToInt("XIL"));
console.log(romanToInt("IX"));