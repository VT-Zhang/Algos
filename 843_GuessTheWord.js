/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */

/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
function findSecretWord(wordlist, master) {
    let res = 0, len = wordlist[0].length, randomIndex, equalCount, guessWord;
    while (res !== len) {
        randomIndex = Math.floor(Math.random() * wordlist.length);
        res = master.guess((guessWord = wordlist[randomIndex]));
        if (res === len) {
            break;
        }
        wordlist.splice(randomIndex, 1);
        for (let i = wordlist.length - 1; i >= 0; i--) {
            equalCount = 0;
            for (let j = 0; j < len; j++) {
                if (guessWord[j] === wordlist[i][j]) {
                    equalCount++;
                }
            }

            if (res === 0) {
                if (equalCount > 0) {
                    wordlist.splice(i, 1);
                }
            } else if (equalCount < res) {
                wordlist.splice(i, 1);
            }
        }
    }
}

console.log(findSecretWord("acckzz", ["acckzz","ccbazz","eiowzz","abcczz"]));

