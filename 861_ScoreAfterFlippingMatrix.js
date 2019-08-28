/**
 * @param {number[][]} A
 * @return {number}
 */
function matrixScore(A) {
    for (let row of A) {
        if (row[0] === 0) {
            for (let i = 0; i < row.length; i++) {
                row[i] = (row[i] + 1) % 2;
            }

        }
    }
    let res = 0;
    for (let j = 0; j < A[0].length; j++) {
        let mx0 = 0, mx1 = 0;
        for (let i = 0; i < A.length; i++) {
            if (A[i][j] === 0) {
                mx0++;
            } else {
                mx1++;
            }
        }
        res += Math.max(mx0,mx1)*(Math.pow(2,A[0].length-j-1))
    }
    return res;
}

console.log(matrixScore([[0,0,1,1],[1,0,1,0],[1,1,0,0]]));
