// https://www.hackerrank.com/challenges/cut-the-sticks/problem

function cutTheSticks(arr) {
    let res = [];
    let min = findMin(arr);
    let allZero = false;
    while (!allZero) {
        let value = minusValue(arr, min);
        arr = value[0];
        res.push(value[1]);
        min = findMin(arr);
        allZero = isAllZero(arr);
    }
    return res.join("\n") + "\n";
}

function findMin(arr) {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            min = Math.min(min, arr[i]);
        }
    }
    return min;
}

function minusValue(arr, value) {
    let sticks = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= value) {
            arr[i] -= value;
            sticks++;
        }
    }
    return [arr, sticks];
}

function isAllZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            return false;
        }
    }
    return true;
}

console.log(cutTheSticks([5,4,4,2,2,8]));
console.log(cutTheSticks([1,2,3,4,3,3,2,1]));
