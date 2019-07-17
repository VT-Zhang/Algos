/**
 * @param {number[]} A
 * @return {boolean}
 */
function canThreePartsEqualSum(A) {
    let sum = 0;
    for (const a of A) {
        sum += a;
    }
    if (sum % 3 !== 0) {
        return false;
    }
    let t = parseInt(sum / 3);
    let cur = 0;
    let count = 0;
    for (const a of A) {
        cur += a;
        if (cur === t) {
            count++;
            cur = 0;
        }
        if (count > 3) {
            return false;
        }
    }
    return count === 3;
}

console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]));
console.log(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1]));
console.log(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4]));
