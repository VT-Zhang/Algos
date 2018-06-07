// https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
    let map = {};
    let max = 0;
    for (let i = 0; i < a.length; i++) {
        if (!map[a[i]]) {
            map[a[i]] = 1;
        } else {
            map[a[i]]++;
        }
    }
    console.log(map);
    let temp = "";
    for (let key in map) {
        if (map.hasOwnProperty(key) && map.hasOwnProperty(temp)) {
            max = Math.max(max, map[temp] + map[key]);
        }
        temp = key;
    }
    return max;
}

console.log(pickingNumbers([4,6,5,3,3,1]));
console.log(pickingNumbers([1,2,2,3,1,2]));