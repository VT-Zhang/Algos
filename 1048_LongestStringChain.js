/**
 * @param {string[]} words
 * @return {number}
 */
function longestStrChain(words) {
    let map = Object.create(null);
    let wordsByLength = Object.create(null);
    let len = [];
    for (let i = 0; i < words.length; i++) {
        if (map[words[i]]) {
            continue;
        }
        if (!wordsByLength[words[i].length]) {
            wordsByLength[words[i].length] = [words[i]];
            len.push(words[i].length);
        } else {
            wordsByLength[words[i].length].push(words[i]);
        }
        map[words[i]] = true;
    }

    len.sort((a, b) => b - a);
    let min = len.pop(), max = 1;

    for (let i = 0; i < len.length; i++) {
        if (len.length - i < max) {
            break;
        }
        for (let key in wordsByLength[len[i]]) {
            helper(wordsByLength[len[i]][key], 1);
        }
    }

    return max;

    function helper(word, count) {
        if (!map[word]) {
            return;
        }
        if (count > max) {
            max = count;
        }
        if (word.length === min) {
            return;
        }
        count++;
        for (let i = 0; i < word.length; i++) {
            helper(word.substr(0, i) + word.substr(i + 1), count);
        }
    }
}



console.log(longestStrChain(["a","b","ba","bca","bda","bdca"]));
