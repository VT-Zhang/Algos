/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
function minEatingSpeed(piles, H) {
    let left = 1;
    let right = piles.reduce((a, b) => a + b);

    while (left <= right) {
        let m = Math.trunc((left + right) / 2);
        let hh = piles.map(p => Math.ceil(p / m)).reduce((a, b) => a + b);

        if (hh <= H) {
            right = m - 1;
        } else {
            left = m + 1;
        }
    }

    return left;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
