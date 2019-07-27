/**
 * @param {number[][]} matrix
 * @return {number}
 */
function maxEqualRowsAfterFlips(matrix) {
    let map = {}, max = 0;
    for (let row of matrix) {
        let one = '', two = '';
        for (let col = 0; col < row.length; col++) {
            let val = row[col];
            one += val === 0 ? 'c' : 's';
            two += val === 0 ? 's' : 'c';
        }
        map[one] = (map[one] || 0) + 1;
        map[two] = (map[two] || 0) + 1;
        max = Math.max(max, map[one], map[two]);
    }
    return max;
}

console.log(maxEqualRowsAfterFlips([[0,1],[1,1]]));
console.log(maxEqualRowsAfterFlips([[0,1],[1,0]]));
console.log(maxEqualRowsAfterFlips([[0,0,0],[0,0,1],[1,1,0]]));
