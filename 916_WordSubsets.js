/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
function wordSubsets(A, B) {
    let arr = Array(26).fill(0);
    for (let b of B) {
        let f = Array(26).fill(0);
        for (let c of b) {
            f[c.charCodeAt(0) - 97]++;
        }
        for (let i = 0; i < 26; i++) {
            arr[i] = Math.max(f[i], arr[i]);
        }
    }
    let res = [];
    outer:
    for (let a of A) {
        let f = Array(26).fill(0);
        for (let c of a) {
            f[c.charCodeAt(0) - 97]++;
        }
        for (let i = 0; i < 26; i++) {
            if (f[i] < arr[i]) {
                continue outer;
            }
        }
        res.push(a);
    }
    return res;
}

console.log(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["e","o"]));
