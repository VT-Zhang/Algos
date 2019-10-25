/**
 * @param {number[][]} grid
 * @return {number}
 */
function getMaximumGold(grid) {
    let directions = [[1, 0], [0, 1],[-1, 0], [0, -1]];
    let max = -Infinity;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let gold = getMax(grid, i, j);
            if (gold > max) {
                max = gold;
            }
        }
    }
    return max;

    function getMax(grid, x, y) {
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === 0) {
            return 0;
        }
        let curMax = -Infinity;
        let temp = grid[x][y];
        grid[x][y] = 0;
        for(let k = 0; k < 4; k++){
            let maxGoldOfCurrentDirection = getMax(grid, x + directions[k][0], y + directions[k][1]);
            if(curMax < maxGoldOfCurrentDirection){
                curMax = maxGoldOfCurrentDirection;
            }
        }
        grid[x][y] = temp;
        return curMax + grid[x][y]
    }
}

console.log(getMaximumGold([[0,6,0],[5,8,7],[0,9,0]]));
console.log(getMaximumGold([[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]));
