/**
 * @param {number[]} A
 * @return {number[]}
 */
function prevPermOpt1(A) {
    let s = [0, 0];
    for (let i = 1; i < A.length; i++) {
        let m0 = A[s[0]];
        let m1 = A[s[1]];
        let n = A[i];
        if (A[i-1] > n) {
            s[0] = i - 1;
            s[1] = i;
        } else if (m1 > n) {
            s[0] = s[1];
            s[1] = 1;
        } else if (m1 === n) {
            continue;
        } else if (m0 > n) {
            s[1] = i;
        }
    }
    let temp = A[s[0]];
    A[s[0]] = A[s[1]];
    A[s[1]] = temp;
    return A;
}

console.log(prevPermOpt1([3,2,1]));
console.log(prevPermOpt1([1,1,5]));
console.log(prevPermOpt1([1,9,4,6,7]));
console.log(prevPermOpt1([3,1,1,3]));
