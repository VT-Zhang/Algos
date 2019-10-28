/**
 * @param {string[]} board
 * @return {boolean}
 */
function validTicTacToe(board) {
    let xCount = 0, oCount = 0, arr = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            arr[i * 3 + j] = board[i].charAt(j);
            if (arr[i * 3 + j] === "X") {
                xCount++;
            }
            if (arr[i * 3 + j] === "O") {
                oCount++;
            }
        }
    }

    let winState = getWinState(arr[0], arr[4], arr[8]);
    winState += getWinState(arr[6], arr[4], arr[2]);

    for (let i = 0; i < 3; i++) {
        winState += getWinState(arr[i * 3], arr[i * 3 + 1], arr[i * 3 + 2]);
        winState += getWinState(arr[i], arr[i + 3], arr[i + 6]);
    }

    return (winState%10 === 0 && oCount === xCount)
        || (winState < 3 && oCount + 1 === xCount);

    function getWinState(c1, c2, c3) {
        if (c1 !== " " && c1 === c2 && c2 === c3) {
            return c1 === "X" ? 1 : 10;
        } else {
            return 0;
        }
    }
}

console.log(validTicTacToe(["O  ", "   ", "   "]));
console.log(validTicTacToe(["XOX", " X ", "   "]));
console.log(validTicTacToe(["XXX", "   ", "OOO"]));
console.log(validTicTacToe(["XOX", "O O", "XOX"]));
