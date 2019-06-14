/**
 * @param {string[]} words
 * @return {number}
 */
function minimumLengthEncoding(words) {
    let res = 0;
    let set = new Set(words);
    set.forEach(word => {
        for (let i = 1; i < word.length; i++) {
            set.delete(word.substring(i, word.length));
        }
    });
    set.forEach(word => {
        res += word.length + 1;
    });
    return res;
}

console.log(minimumLengthEncoding(["time", "me", "bell"]));
