/**
 * @param {number[][]} wall
 * @return {number}
 */
function leastBricks(wall) {
    let counts = {};
    let max = 0;
    for (let row of wall) {
        let sum = 0;
        for (let i = 0; i < row.length - 1; i++) {
            sum += row[i];
            counts[sum] = (counts[sum] || 0) + 1;
            max = Math.max(max, counts[sum]);
        }
    }
    return wall.length - max;
}
let wall =
    [   [1,2,2,1],
        [3,1,2],
        [1,3,2],
        [2,4],
        [3,1,2],
        [1,3,1,1]
    ];
console.log(leastBricks(wall));
