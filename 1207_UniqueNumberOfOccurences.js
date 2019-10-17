/**
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) {
    let map = {};
    let set = new Set();
    for (let item of arr) {
        if (!map[item]) {
            map[item] = 1;
        } else {
            map[item]++;
        }
    }
    for (let key in map) {
        if (!set.has(map[key])) {
            set.add(map[key]);
        } else {
            return false;
        }
    }
    return true;
}

console.log(uniqueOccurrences([1,2,2,1,1,3]));
console.log(uniqueOccurrences([1,2]));
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]));

