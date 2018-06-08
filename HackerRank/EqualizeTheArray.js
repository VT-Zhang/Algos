// https://www.hackerrank.com/challenges/equality-in-a-array/problem

function equalizeArray(arr) {
    let map = {};
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]]++;
        }
    }
    for (let key in map) {
        max = Math.max(max, map[key]);
    }
    return arr.length - max;
}

console.log(equalizeArray([3,3,2,1,3]));
