/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    let res = [];
    let step = 1, index = 0;
    for (let i = 0; i < s.length; i++) {
        if (res[index] === undefined) {
            res[index] = '';
        }
        res[index] += s[i];
        if (index === 0){
            step = 1;
        } else if (index === numRows - 1) {
            step = -1;
        }
        index += step;
    }
    return res.join('');
}

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("AB", 1));
