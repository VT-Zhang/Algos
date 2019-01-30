/**
 * @param {number[][]} grid
 * @return {number}
 */
function projectionArea(grid) {
    let total = 0;
    for (let i = 0; i < grid.length; i++) {
        let xSide = 0;
        let ySide = 0;
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                total++;
            }
            if (xSide < grid[i][j]) {
                xSide = grid[i][j];
            }
            if (ySide < grid[j][i]) {
                ySide = grid[j][i]
            }
        }
        total += xSide + ySide;
    }
    return total;
}

console.log(projectionArea([[1,2],[3,4]]));
console.log(projectionArea([[1,0],[0,2]]));
console.log(projectionArea([[1,1,1],[1,0,1],[1,1,1]]));
console.log(projectionArea([[2,2,2],[2,1,2],[2,2,2]]));
