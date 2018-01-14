// Given a positive integer, return its corresponding column title as appear in an Excel sheet.
//
//     For example:
//
//     1 -> A
// 2 -> B
// 3 -> C
//     ...
// 26 -> Z
// 27 -> AA
// 28 -> AB

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if(n == 0) {
        return "0";
    }
    var str = "";
    while(n > 0) {
        n--;
        var code = String.fromCharCode(n % 26 + 65);
        n = Math.floor(n/26);
        str += code;
    }
    return str.split("").reverse().join("");
};

console.log(convertToTitle(27));
console.log(convertToTitle(25));