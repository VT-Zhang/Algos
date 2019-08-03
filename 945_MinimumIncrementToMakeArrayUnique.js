/**
 * @param {number[]} A
 * @return {number}
 */
function minIncrementForUnique(A) {
    let map = {}, moves = 0;
    A.forEach(item => {
        while (map[item]) {
            item++;
            moves++;
        }
        map[item] = true;
    });
    return moves;
}

console.log(minIncrementForUnique([1,2,2]));
console.log(minIncrementForUnique([3,2,1,2,1,7]));
