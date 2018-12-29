/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortArrayByParityII(A) {
    let oddArray = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 1) {
            oddArray.push(A[i]);
            A.splice(i, 1);
            i--;
        }
    }
    let res = [];
    for (let i = 0; i < A.length; i++) {
        res.push(A[i]);
        res.push(oddArray[i]);
    }
    return res;
}

console.log(sortArrayByParityII([4,2,5,7,1,6]));
