// The count-and-say sequence is the sequence of integers beginning as follows:
// 1, 11, 21, 1211, 111221, ...
//
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n, generate the nth sequence.
//
// Note: The sequence of integers will be represented as a string.

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n <= 1) {
        return "1";
    }
    var str = "1";
    for(var i = 2; i <= n; i++) {
        var num = str[0];
        var temp = str;
        var counter = 1;
        str = "";
        for(var j = 1; j < temp.length; j++) {
            if(temp[j] == num) {
                counter++;
            }
            else {
                str += counter;
                str += num;
                num = temp[j];
                counter = 1;
            }
        }
        str += counter;
        str += num;
    }
    return str;
};


console.log(countAndSay(4));
