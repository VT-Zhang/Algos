/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
function findRightInterval(intervals) {
    let len = intervals.length;
    if (len === 0) {
        return [];
    }
    if (len === 1) {
        return [-1];
    }
    intervals = intervals.map((item, index) => {
        item.index = index;
        return item;
    }).sort((a, b) => a.start - b.start);
    let res = [];
    for (let item of intervals) {
        res[item.index] = binarySearch(item, intervals)
    }
    return res;
}

function binarySearch(target, intervals) {
    let left = 0, right = intervals.length - 1, solution = -1;
    while (left <= right) {
        let mid = (left + right) / 2 | 0;
        if (target.end > intervals[mid].start) {
            left = mid + 1;
        } else {
            solution = intervals[mid].index;
            right = mid - 1;
        }
    }
    return solution;
}

console.log(findRightInterval([ [1,2] ]));
console.log(findRightInterval([ [3,4], [2,3], [1,2] ]));
