/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
function largestOverlap(A, B) {
    let len = B.length;
    let set = new Set();
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (B[i][j] === 1) {
                set.add(i * 100 + j);
            }
        }
    }
    let map = {};
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (A[i][j] === 1) {
                set.forEach(b => {
                    let o = i * 100 + j;
                    map[b - o] = ~~map[b - o] + 1;
                })
            }
        }
    }
    let res = 0;
    Object.keys(map).forEach(key => {
        res = Math.max(res, map[key])
    });
    return res;
}

let A = [[1,1,0],
    [0,1,0],
    [0,1,0]];
let B = [[0,0,0],
    [0,1,1],
    [0,0,1]];
console.log(largestOverlap(A, B));
