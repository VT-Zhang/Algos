/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function findDiagonalOrder(matrix) {
    if (matrix.length < 1) {
        return [];
    }

    let res = [],
        row = 0,
        col = 0,
        rowMax = matrix.length - 1,
        colMax = matrix[0].length - 1,
        countCells = matrix.length * matrix[0].length,
        rowMove = -1,
        colMove = 1;

    function reverseMove() {
        rowMove = -rowMove;
        colMove = -colMove;
    }

    while (res.length < countCells) {
        res.push(matrix[row][col]);
        row += rowMove;
        col += colMove;
        if (row > rowMax) {
            reverseMove();
            col += 2;
            row -= 1;
        } else if (col > colMax) {
            reverseMove();
            row += 2;
            col -= 1;
        } else if (col < 0) {
            reverseMove();
            col = 0;
        } else if (row < 0) {
            reverseMove();
            row = 0;
        }
    }
    return res;
}

let matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];

console.log(findDiagonalOrder(matrix));
