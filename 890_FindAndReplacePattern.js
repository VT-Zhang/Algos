/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
function findAndReplacePattern(words, pattern) {
    let res = [];
    for (let i = 0; i < words.length; i++) {
        let patternMap = {};
        let wordMap = {};
        let flag = true;
        for (let j = 0; j < pattern.length; j++) {
            if (wordMap[words[i][j]] !== patternMap[pattern[j]]) {
                flag = false;
                break;
            }
            patternMap[pattern[j]] = j;
            wordMap[words[i][j]] = j;
        }
        if (flag) {
            res.push(words[i])
        }
    }
    return res;
}

console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb"));
