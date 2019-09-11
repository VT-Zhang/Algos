/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
function canMakePaliQueries(s, queries) {
    let res = [];
    for (let query of queries) {
        let [left, right, k] = query;
        if (query[2] > 13) {
            res.push(true);
            continue;
        }
        k *= 2;
        let counts = new Array(26).fill(0);
        for (let j = left; j <= right; j++) {
            counts[s.charCodeAt(j) - 'a'.charCodeAt(0)]++;
        }
        for (let item of counts) {
            if (item % 2 === 1) {
                k--;
            }
        }
        if ((right - left + 1) % 2 === 1) {
            k++;
        }
        if (k < 0) {
            res.push(false);
        } else {
            res.push(true);
        }
    }
    return res;
}

console.log(canMakePaliQueries("abcda", [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]));
