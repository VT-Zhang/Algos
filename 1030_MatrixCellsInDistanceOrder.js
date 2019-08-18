/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
function allCellsDistOrder(R, C, r0, c0) {
    let res = [];
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            let distance = Math.abs(i - r0) + Math.abs(j - c0);
            res[distance] = res[distance] || [];
            res[distance].push([i, j]);
        }
    }
    return res.reduce((it, arr) => it.concat(arr), []);
}

console.log(allCellsDistOrder(1,2, 0, 0));
console.log(allCellsDistOrder(2,2, 0, 1));
console.log(allCellsDistOrder(2,3, 1, 2));
