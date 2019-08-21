/**
 * @param {number[]} row
 * @return {number}
 */
function minSwapsCouples(row) {
    let pos = {}, count = 0;
    for (let i = 0; i < row.length; i++) {
        pos[row[i]] = i;
    }
    for (let i = 1; i < row.length; i += 2) {
        while ((row[i]^1) !== row[i-1]) {
            let index = pos[row[i]^1]^1;
            [row[i], row[index]] = [row[index], row[i]];
            count++;
        }
    }
    return count;
}

console.log(minSwapsCouples([0, 2, 1, 3]));
console.log(minSwapsCouples([3, 2, 0, 1]));
