/**
 * @param {number[]} arr
 * @return {number[][]}
 */
function minimumAbsDifference(arr) {
    let res = [];
    let minDiff = Number.MAX_VALUE;
    let prevIndex, diff;
    arr.sort((a, b) => a - b);
    for (let i = 1; i < arr.length; i++) {
        prevIndex = i - 1;
        diff = arr[i] - arr[prevIndex];
        if (diff > minDiff) {
            continue;
        }
        if (diff < minDiff) {
            minDiff = diff;
            res.length = 0;
        }
        res.push([arr[prevIndex], arr[i]]);
    }
    return res;
}

console.log(minimumAbsDifference([4,2,1,3]));
console.log(minimumAbsDifference([1,3,6,10,15]));
console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]));
