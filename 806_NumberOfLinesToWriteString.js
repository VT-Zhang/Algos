/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
function numberOfLines(widths, S) {
    let lines = 1;
    let width = 0;
    for (let i = 0; i < S.length; i++) {
        const sWidth = widths[S.charCodeAt(i) - 97];
        if (width + sWidth > 100) {
            lines++;
            width = sWidth;
        } else {
            width += sWidth;
        }
    }
    return [lines, width];
}

let arr = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
let str = "abcdefghijklmnopqrstuvwxyz";
console.log(numberOfLines(arr, str));
