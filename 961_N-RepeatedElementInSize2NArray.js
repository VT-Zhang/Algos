/**
 * @param {number[]} A
 * @return {number}
 */
function repeatedNTimes(A) {
    let map = {};
    A.forEach(function(item) {
        if (!map[item]) {
            map[item] = 1;
        } else {
            map[item]++;
        }
    });
    let max = 0;
    for (let key in map) {
        if (map.hasOwnProperty(key) && max < map[key]) {
            max = map[key];
        }
    }
    for (let key in map) {
        if (map.hasOwnProperty(key) && map[key] === max) {
            return parseInt(key);
        }
    }
}

console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));
console.log(repeatedNTimes([2,1,2,5,3,2]));
