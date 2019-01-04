/**
 * @param {number[]} A
 * @return {boolean}
 */
function validMountainArray(A) {
    let n = A.length;
    let i = 0;
    let j = n - 1;
    while (i + 1 < n && A[i] < A[i+1]) {
        i++;
    }
    while (j > 0 && A[j-1] > A[j]) {
        j--;
    }
    return i > 0 && i === j && j < n - 1;
}

console.log(validMountainArray([3,5,5]));
console.log(validMountainArray([0,3,2,1]));
