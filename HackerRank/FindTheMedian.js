// https://www.hackerrank.com/challenges/find-the-median/problem

function findMedian(arr) {
    arr = arr.sort(function(a, b) {
        return a - b;
    });
    return arr[Math.floor(arr.length/2)];
}

console.log(findMedian([0,1,2,4,6,5,3]));