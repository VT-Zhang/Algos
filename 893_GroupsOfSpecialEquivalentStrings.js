/**
 * @param {string[]} A
 * @return {number}
 */
function numSpecialEquivGroups(A) {
    let odd, even, key;
    let count = 0;
    let map = {};
    for (let i = 0; i < A.length; i++) {
        odd = [];
        even = [];
        for (let j = 0; j < A[i].length; j++) {
            if (j % 2 === 0) {
                even.push(A[i][j]);
            } else {
                odd.push(A[i][j]);
            }
        }
        even.sort();
        odd.sort();
        key = even.join('') + odd.join('');
        if (!map[key]) {
            map[key] = true;
            count++;
        }
    }
    return count;
}

console.log(numSpecialEquivGroups(["a","b","c","a","c","c"]));
console.log(numSpecialEquivGroups(["aa","bb","ab","ba"]));
console.log(numSpecialEquivGroups(["abc","acb","bac","bca","cab","cba"]));
