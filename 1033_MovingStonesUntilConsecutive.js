/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
function numMovesStones(a, b, c) {
    let arr = [a, b ,c].sort((a, b) => a - b)
    let max = arr[2] - arr[0] - 2;
    let min = 2;
    if (arr[2] - arr[1] < 3 || arr[1] - arr[0] < 3) {
        min = 1;
    }
    if (arr[2] - arr[1] === 1 && arr[1] - arr[0] === 1) {
        min = 0;
    }
    return [min, max];
}

console.log(numMovesStones(1, 2, 5));
console.log(numMovesStones(4, 3, 2));
console.log(numMovesStones(3, 5, 1));
