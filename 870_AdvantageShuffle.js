/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function advantageCount(A, B) {
    let sortedA = A.sort((a, b) => a - b);
    let sortedB = B.map((val, index) => ({val, index}))
        .sort((a, b) => b.val - a.val);

    sortedB.forEach(item => {
        let index = sortedA.length - 1;
        if (sortedA[index] > item.val) {
            item.val = sortedA.pop();
        } else {
            item.val = sortedA.shift();
        }
    });
    return sortedB.sort((a, b) => a.index - b.index)
        .map(item => item.val);
}

console.log(advantageCount([2,7,11,15], [1,10,4,11]));
console.log(advantageCount([12,24,8,32], [13,25,32,11]));
