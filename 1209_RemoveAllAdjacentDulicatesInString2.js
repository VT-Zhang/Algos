/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function removeDuplicates(s, k) {
    let i = 0, res = "";
    while (i < s.length) {
        let j = 0;
        while (j < k && s[i+j] === s[i]) {
            j++;
        }
        if (j < k) {
            res += s.substring(i, i + j);
        }
        i += j;
    }
    if (res.length < s.length) {
        return removeDuplicates(res, k);
    }
    return res;
}

console.log(removeDuplicates("abcd", 2));
console.log(removeDuplicates("deeedbbcccbdaa", 3));
console.log(removeDuplicates("pbbcggttciiippooaais", 2));
