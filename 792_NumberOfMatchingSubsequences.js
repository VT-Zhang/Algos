/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
function numMatchingSubseq(S, words) {
    if (!S || S.length === 0 || words.length === 0) {
        return 0;
    }
    let map = new Map();
    for (let word of words) {
        if (!map.has(word[0])) {
            map.set(word[0], [])
        }
        map.get(word[0]).push(word.split(''));
    }
    let count = 0;
    for (const s of S) {
        if (map.has(s)) {
            const list = map.get(s);
            map.delete(s);
            for (let l of list) {
                l.shift();
                if (l.length === 0) {
                    count++;
                    continue;
                }
                if (map.has(l[0])) {
                    map.get(l[0]).push(l);
                } else {
                    map.set(l[0], [l]);
                }
            }
        }
    }
    return count;
}

console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"]));
