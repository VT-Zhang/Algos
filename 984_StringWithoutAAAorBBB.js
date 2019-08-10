/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
function strWithout3a3b(A, B) {
    let res = '';
    let set = (A >= B) ? 'ab' : 'ba';
    let min = (A >= B) ? B : A;
    let diff = Math.abs(A - B);
    for (let i = 0; i < min; i++) {
        if (diff > 0) {
            if (A >= B) {
                res += 'a';
            } else {
                res += 'b';
            }
            diff--;
        }
        res += set;
    }
    if (diff > 0) {
        for (let i = 0; i < diff; i++) {
            res += (A >= B) ? 'a': 'b';
        }
    }
    return res;
}

console.log(strWithout3a3b(1, 2));
console.log(strWithout3a3b(4, 1));
