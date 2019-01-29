/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
function uncommonFromSentences(A, B) {
    let words = A.split(' ').concat(B.split(' '));
    console.log(words);
    let map = {};
    words.forEach(word => {
        if (!map[word]) {
            map[word] = 0;
        }
        map[word]++;
    });
    return words.filter(word =>
        map[word] === 1
    )
}

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
// console.log(uncommonFromSentences("apple apple", "banana"));
