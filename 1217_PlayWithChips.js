/**
 * @param {number[]} chips
 * @return {number}
 */
function minCostToMoveChips(chips) {
    let even = [...chips].filter(chip => chip % 2 === 0);
    let odd = [...chips].filter(chip => chip % 2 === 1);
    return Math.min(even.length, odd.length);
}

console.log(minCostToMoveChips([1,2,3]));
console.log(minCostToMoveChips([2,2,2,3,3]));
