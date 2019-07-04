/**
 * @param {number[]} A
 * @return {boolean}
 */
function canReorderDoubled(A) {
    if (A.length % 2 !== 0) {
        return false;
    }
    A.sort((a, b) => a - b);
    let map = new Map();
    for (let a of A) {
        if (a === 0) {
            continue;
        }
        if (!map.has(a)) {
            map.set(a, 0);
        }
        map.set(a, map.get(a) + 1);
    }
    for (let a of A) {
        if (a === 0 || map.get(a) === 0) {
            continue;
        }
        let target = a < 0 ? parseInt(a / 2) : a * 2;
        if (a < 0 && a % 2 !== 0 || !map.has(target) || map.get(a) > map.get(target)) {
            return false;
        }
        map.set(target, map.get(target) - map.get(a));
        map.set(a, 0);
    }
    return true;
}

console.log(canReorderDoubled([3,1,3,6]));
console.log(canReorderDoubled([2,1,2,6]));
console.log(canReorderDoubled([4,-2,2,-4]));
console.log(canReorderDoubled([1,2,4,16,8,4]));
