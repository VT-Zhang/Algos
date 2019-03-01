/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
    let res = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j <=i; j++) {
            let word = s.slice(j, i+1);
            if (wordDict.includes(word) && (j === 0 || res[j-1])) {
                res[i] = true;
            }
        }
    }
    return res[s.length - 1] || false;
}

console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
