// Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum minutes difference between any two time points in the list.
//     Example 1:
// Input: ["23:59","00:00"]
// Output: 1
// Note:
//     The number of time points in the given list is at least 2 and won't exceed 20000.
// The input time is legal and ranges from 00:00 to 23:59.

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    var res = 2000;
    var arr = [];
    for(var i = 0; i < timePoints.length; i++) {
        var minutes = 0;
        minutes += parseInt(timePoints[i][4]);
        minutes += parseInt(timePoints[i][3] * 10);
        minutes += parseInt(timePoints[i][1] * 60);
        minutes += parseInt(timePoints[i][0] * 600);
        arr.push(minutes);
    }
    arr.sort(function (a, b) {
        return a - b;
    });
    console.log(arr);
    for(var j = 1; j < arr.length; j++) {
        res = Math.min(res, arr[j] - arr[j-1]);
    }
    return Math.min(res, arr[0] + 1440 - arr[arr.length-1]);
};
console.log(findMinDifference(["00:50", "01:10", "00:00", "23:59"]));
console.log(findMinDifference(["00:00","23:59","00:00"]));