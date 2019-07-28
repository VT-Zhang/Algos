/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
function findOcurrences(text, first, second) {
    let words = text.split(' ');
    let res = [];
    let length = words.length - 2;
    for (let i = 0; i < length; i++) {
        if (words[i] === first && words[i+1] === second) {
            res.push(words[i+2]);
        }
    }
    return res;
}

console.log(findOcurrences("alice is a good girl she is a good student", "a", "good"));
console.log(findOcurrences("we will we will rock you", "we", "will"));
