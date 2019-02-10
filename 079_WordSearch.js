/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
    function find(i, j, k) {
        if (i < 0 || j < 0 || i > board.length - 1|| j > board[0].length - 1) {
            return false;
        }
        if (board[i][j] !== word[k]) {
            return false;
        }
        if (k === word.length - 1) {
            return true;
        }

        board[i][j] = "*";

        if (find(i - 1, j, k + 1)) {
            return true;
        }
        if (find(i + 1, j, k + 1)) {
            return true;
        }
        if (find(i, j - 1, k + 1)) {
            return true;
        }
        if (find(i, j + 1, k + 1)) {
            return true;
        }

        board[i][j] = word[k];
        return false;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (find(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
}

let board =
    [
        ['A','B','C','E'],
        ['S','F','C','S'],
        ['A','D','E','E']
    ];

console.log(exist(board, "ABCCED"));
console.log(exist(board, "SEE"));
console.log(exist(board, "ABCB"));


