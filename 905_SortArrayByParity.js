/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    var array = [];
    for (var i = 0; i < A.length; i++) {
        if (A[i] % 2 == 0) {
            array.push(A[i]);
        }
    }
    for (var i = 0; i < A.length; i++) {
        if (A[i] % 2 == 1) {
            array.push(A[i]);
        }
    }
    return array;
};

console.log(sortArrayByParity([3,1,2,4]));