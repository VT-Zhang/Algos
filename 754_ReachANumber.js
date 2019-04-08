/**
 * @param {number} target
 * @return {number}
 */
function reachNumber(target) {
    target = Math.abs(target);
    let sum = 0;
    for (let step = 0; step < Number.MAX_SAFE_INTEGER; step++) {
        sum += step;
        let delta = sum - target;
        if (delta >= 0 && delta % 2 === 0) {
            return step;
        }
    }
}

console.log(reachNumber(3));
console.log(reachNumber(2));
