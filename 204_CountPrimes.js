// Description:
//
//     Count the number of prime numbers less than a non-negative number, n.

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var res = [];
    res[0] = false;
    res[1] = false;
    for(var i = 2; i < n; i++) {
        res[i] = true;
    }
    for(var j = 2; j * j < n; j++) {
        if(!res[j]) {
            continue;
        }
        for(var k = j * j; k < n; k += j) {
            res[k] = false;
        }
    }
    console.log(res);
    var counter = 0;
    for(var l = 0; l < n; l++) {
        if(res[l]) {
            counter++;
        }
    }
    return counter;
};
console.log(countPrimes(10));
console.log(countPrimes(100));