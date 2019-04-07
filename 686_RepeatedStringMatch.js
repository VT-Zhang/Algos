/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
function repeatedStringMatch(A, B) {
    if (A.includes(B)) {
        return 1;
    }
    let time = 1;
    while (true) {
        let res = A.repeat(++time);
        if (res.includes(B)) {
            return time;
        } else if (res.length > 2 * B.length) {
            return -1;
        }
    }
}

console.log(repeatedStringMatch("abcd", "cdabcdab"));
