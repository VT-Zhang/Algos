/**
 * @param {number[][]} grid
 * @return {number}
 */
function shortestPathBinaryMatrix(grid) {
    if (grid[0][0]) {
        return -1;
    }

    const queue = [{ cord: [0, 0], dist: 1 }];
    const directs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    const N = grid.length;
    const isValidCord = (x, y) => x >= 0 && x < N && y >= 0 && y < N;

    grid[0][0] = 1;

    while (queue.length) {
        const { cord: [x, y], dist } = queue.shift();

        if (x === N - 1 && y === N - 1) {
            return dist;
        }

        for (let [moveX, moveY] of directs) {
            const nextX = x + moveX;
            const nextY = y + moveY;

            if (isValidCord(nextX, nextY) && grid[nextX][nextY] === 0) {
                queue.push({ cord: [nextX, nextY], dist: dist + 1 });
                grid[nextX][nextY] = 1;
            }
        }
    }

    return -1;
}

console.log(shortestPathBinaryMatrix([[0,1],[1,0]]));
console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]]));

