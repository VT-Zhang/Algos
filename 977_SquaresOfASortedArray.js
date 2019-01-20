/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortedSquares(A) {
    let res = [];
    A.forEach(item => {
        res.push(item * item);
    });
    return res.sort(((a, b) => {
        return a - b;
    }));
}

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));
