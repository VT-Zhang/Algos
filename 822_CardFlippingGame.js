/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
function flipGame(fronts, backs) {
    let set = new Set();
    let res = 3000;
    for (let i = 0; i < fronts.length; i++) {
        if (fronts[i] === backs[i]) {
            set.add(fronts[i]);
        }
    }
    for (let front of fronts) {
        if (!set.has(front)) {
            res = Math.min(res, front);
        }
    }
    for (let back of backs) {
        if (!set.has(back)) {
            res = Math.min(res, back);
        }
    }
    return res % 3000;
}

console.log(flipGame([1,2,4,4,7], [1,3,4,1,3]));
