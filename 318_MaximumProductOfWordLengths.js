/**
 * @param {string[]} words
 * @return {number}
 */
function maxProduct(words) {
    let max = 0;
    let holder = new Array(words.length).fill(0);

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            holder[i] |= 1 << (words[i].charCodeAt(j) - 97);
        }
    }

    let len = words.length - 1;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j <= len; j++) {
            if ((holder[i] & holder[j]) === 0) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }

    return max;
}

console.log(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]));
