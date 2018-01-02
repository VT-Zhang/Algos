// Given a list of daily temperatures, produce a list that, for each day in the input, tells you how many days you would
// have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.
//
//     For example, given the list temperatures = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].
//
//     Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    var res = [];
    for(var i = 0; i < temperatures.length; i++) {
        for(var j = i + 1; j < temperatures.length; j++) {
            if(temperatures[j] > temperatures[i]) {
                res.push(j-i);
                break;
            }
            if(j == temperatures.length - 1 && temperatures[j] <= temperatures[i]) {
                res.push(0);
            }
        }
    }
    res.push(0);
    return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([73, 76]));
console.log(dailyTemperatures([73]));
console.log(dailyTemperatures([]));
console.log(dailyTemperatures([80, 74, 75, 71, 69, 72, 76, 73]));