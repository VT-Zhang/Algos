/**
 * @param {number[]} A
 * @return {number[]}
 */
function pancakeSort(A) {
    let B = [], res = [];

    for(let i = 0; i < A.length; ++i) {
        B.push(i + 1);
    }
    for(let i = 0; i < A.length; ++i) {
        if(A[i] !== B[i]) {
            let index = B.indexOf(A[i]);
            res.push(index + 1);
            if(i) {
                res.push(index - i + 1);
                res.push(index + 1);
                B = [...B.slice(0,i).reverse(), A[i], ...B.slice(i + 1, index).reverse(), B[i], ...B.slice(index + 1)];
            } else {
                B = [...B.slice(0, index + 1).reverse(), ... B.slice(index + 1)];
            }

        }
    }
    return res.reverse();
}

console.log(pancakeSort([3, 2, 4, 1]));
console.log(pancakeSort([1, 2, 3]));
