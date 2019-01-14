/**
 * @param {string[]} A
 * @return {number}
 */
function minDeletionSize(A) {
    let count = 0;
    for (let i = 0; i < A[0].length; i++) {
        for (let j = 0; j < A.length - 1; j++) {
            if (A[j][i] > A[j+1][i]) {
                count++;
                console.log(A[j][i] + " " + A[j+1][i]);
                break;
            }
        }
    }
    return count;
}

console.log(minDeletionSize(["cba","daf","ghi"]));
console.log(minDeletionSize(["a","b"]));
console.log(minDeletionSize(["zyx","wvu","tsr"]));
