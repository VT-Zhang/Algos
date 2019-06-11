/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
function expressiveWords(S, words) {
    let count = 0;
    for (let word of words) {
        let i, j;
        for (i = 0, j = 0; i < S.length; i++) {
            if (j < word.length && S[i] === word[j]) {
                j++;
            } else if (i > 0 && S[i-1] === S[i] && i + 1 < S.length && S[i] === S[i+1]) {
                i++;
            } else if (!(i > 1 && S[i] === S[i - 1] && S[i] === S[i - 2])) {
                break;
            }
        }
        if (i === S.length && j === word.length) {
            count++;
        }
    }
    return count;
}

console.log(expressiveWords("heeellooo", ["hello", "hi", "helo"]));
