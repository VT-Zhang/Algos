/**
 * @param {number[][]} M
 * @return {number[][]}
 */
function imageSmoother(M) {
    let result = [];
    for (let i = 0; i < M.length; i++) {
        let temp = [];
        for (let j = 0; j < M[0].length; j++) {
            temp.push(helper(i, j, M))
        }
        result.push(temp);
    }
    return result;
}

function helper(i, j, M) {
    let count = 0, sum = 0;

    const dir = [[-1, 0],
        [-1, -1],
        [0, -1],
        [0, 1],
        [-1, 1],
        [1, -1],
        [1, 1],
        [1, 0],
        [0, 0]];

    for (let k = 0; k < 9; k++) {
        let row = i + dir[k][0];
        let col = j + dir[k][1];

        if (row >= 0 && col >= 0 && row < M.length && col < M[0].length) {
            sum += M[row][col];
            count++;
        }
    }

    return Math.floor(sum / count);
}

let matrix = [[1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]];

console.log(imageSmoother(matrix));
