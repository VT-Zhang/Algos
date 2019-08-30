/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
function carFleet(target, position, speed) {
    let map = [], res = 0, max = 0;
    for (let i = 0; i < position.length; i++) {
        map[target - position[i]] = (target - position[i]) / speed[i];
    }
    for (let item of map) {
        if (item > max) {
            res++;
            max = item;
        }
    }
    return res;
}

console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3]));
