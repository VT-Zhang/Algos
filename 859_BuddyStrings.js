/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
function buddyStrings(A, B) {
    if (A.length !== B.length) {
        return false;
    }
    let [dif, chars] = [[], new Set(A)];
    for (let i in A) {
        if (A.hasOwnProperty(i)) {
            if (A[i] !== B[i]) {
                dif.push([A[i], B[i]]);
            }
        }
    }
    return dif.length === 2 && dif[0].join() === dif[1].reverse().join()
            || (dif.length === 0 && chars.size !== A.length);
}

console.log(buddyStrings("aaaaaaabc", "aaaaaaacb"));
console.log(buddyStrings("ab", "ba"));
console.log(buddyStrings("", "aa"));
console.log(buddyStrings("ab", "ab"));

