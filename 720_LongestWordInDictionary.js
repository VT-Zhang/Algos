/**
 * @param {string[]} words
 * @return {string}
 */
function longestWord(words) {
    words.sort();
    let set = new Set(words);
    let res = '';
    for (let word of words) {
        let isValid = true;
        let key = '';
        for (let i = 0; i < word.length; i++) {
            key += word[i];
            if (!set.has(key)) {
                isValid = false;
                break;
            }
        }
        if (isValid && word.length > res.length) {
            res = word;
        }
    }
    return res;
}

console.log(longestWord(["w","wo","wor","worl", "world"]));
console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]));
