/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    if (intervals === null || intervals.length <= 1) {
        return intervals;
    }
    let starts = [], ends = [], res = [];
    for (let interval of intervals) {
        let[s, e] = interval;
        starts.push(s);
        ends.push(e);
    }
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);
    let s = 0, e = 0, curS = starts[s];
    while (s < starts.length) {
        while (starts[s] <= ends[e] && s < starts.length) {
            s++;
        }
        while (ends[e] < starts[s]) {
            e++;
        }
        res.push([curS, ends[e-1]]);
        curS = starts[s];
    }
    res[res.length - 1][1] = ends[ends.length - 1];
    return res;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));
