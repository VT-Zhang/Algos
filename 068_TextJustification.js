/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify(words, maxWidth) {
    let length = words.length;
    let res = [];
    for (let i = 0; i < length; i = j) {
        let len = -1;
        for (var j = i; j < length && len + 1 + words[j].length <= maxWidth; j++) {
            len += 1 + words[j].length;
        }

        let spaces = 1;
        let extra = 0;

        if (j !== i + 1 && j !== length) {
            spaces = (maxWidth - len) / (j - 1 - i) + 1;
            extra = (maxWidth - len) % (j - 1 - i);
        }

        let row = words[i];
        for (let k = i + 1; k < j; k++, extra--) {
            row += " ".repeat(spaces + (extra > 0 ? 1: 0)) + words[k];
        }
        row += " ".repeat(maxWidth - row.length);
        res.push(row);
    }
    return res;
}

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16));
console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain",
    "to","a","computer.","Art","is","everything","else","we","do"], 20));
