/**
 * @param {number[]} A
 * @return {number}
 */
function maxWidthRamp(A) {
    let stack = [], max = 0;
    for (let i = 0; i < A.length; i++) {
        if (stack.length > 0 && A[stack[stack.length - 1]] <= A[i]) {
            let k = findMax(stack, A, i);
            max = Math.max(max, i - k);
        } else {
            stack.push(i);
        }
    }
    return max;
}

function findMax(stack, A, index) {
    let start = 0;
    let end = stack.length - 1;
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        if (A[index] < A[stack[mid]]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return stack[start];
}

console.log(maxWidthRamp([6,0,8,2,1,5]));
console.log(maxWidthRamp([9,8,1,0,1,9,4,0,4,1]));
