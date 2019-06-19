/**
 * @param {number[]} A
 * @return {number}
 */
function longestMountain(A) {
    let a = 1, max = 0;
    for (let i = 1; i < A.length; i++) {
        if (A[i] > A[i-1]) {
            a++;
        } else if (A[i] === A[i-1]) {
            a = 1;
        } else {
            let d = 0;
            while (i < A.length && A[i] < A[i-1]) {
                d++;
                i++;
            }
            if (a > 1) {
                max = Math.max(a + d, max);
            }
            a = 1;
            i--;
        }
    }
    return max;
}

console.log(longestMountain([2,1,4,7,3,2,5]));
console.log(longestMountain([2,2,2]));
