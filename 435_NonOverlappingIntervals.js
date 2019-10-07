/**
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals(intervals) {
    intervals.sort((a, b) => {
        return a[1] - b[1]
    });
    let pre = null;
    let counter = 0;
    intervals.forEach((item) => {
        if (!pre) {
            pre = item;
        }
        else {
            if (pre[1] > item[0]) {
                counter++;
            } else {
                pre = item;
            }
        }
    });
    return counter;
}

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]));
console.log(eraseOverlapIntervals([[1,2],[2,3]]));
