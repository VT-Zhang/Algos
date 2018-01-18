// Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. Return the maximum valued number you could get.
//
//     Example 1:
// Input: 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.
// Example 2:
// Input: 9973
// Output: 9973
// Explanation: No swap.
//     Note:
// The given number is in the range [0, 108]

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    var arr = (num + '').split('');
    console.log(arr);
    for(var i = 0; i < arr.length; i++) {
        var maxIndex = i;
        var maxNum = -1;
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[maxIndex] < arr[j] || (maxIndex != i && arr[maxIndex] == arr[j])) {
                maxIndex = j;
                maxNum = arr[j];
            }
        }
        if(maxIndex != i) {
            var temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
            return parseInt(arr.join(''));
        }
    }
    return num;
};

console.log(maximumSwap(2736));
console.log(maximumSwap(9973));

var maximumSwap1 = function(num) {
    var s = (num + '').split("");
    var max = num;
    for (var i = 0; i < s.length; i++) {
        for (var j = i + 1; j < s.length; j++) {
            var t = s[i];
            s[i] = s[j];
            s[j] = t;
            max = Math.max(max, Number(s.join("")));
            t = s[i];
            s[i] = s[j];
            s[j] = t;
        }
    }
    return max;
};