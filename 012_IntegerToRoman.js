// Given an integer, convert it to a roman numeral.
//
//     Input is guaranteed to be within the range from 1 to 3999.

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var res = "";
    var val = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var str = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    for(var i = 0; i < val.length; i++) {
        while(num >= val[i]) {
            num -= val[i];
            res += str[i];
        }
    }
    return res;
};

console.log(intToRoman(6));
console.log(intToRoman(11));
console.log(intToRoman(59));