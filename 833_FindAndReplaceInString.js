/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
function findReplaceString(S, indexes, sources, targets) {
    let arr = [];
    for (let i = 0; i < indexes.length; i++) {
        arr.push([indexes[i], sources[i], targets[i]]);
    }
    arr.sort((a,b) => b[0] - a[0]);

    for (let [index, source, target] of arr) {
        if (S.substring(index, index + source.length) === source) {
            S = S.substring(0, index) + target + S.substring(index + source.length);
        }
    }
    return S;
}

console.log(findReplaceString("abcd", [0,2], ["a","cd"], ["eee","ffff"]));
console.log(findReplaceString("abcd", [0,2], ["ab","ec"], ["eee","ffff"]));
