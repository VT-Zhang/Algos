/**
 * @param {number[]} deck
 * @return {number[]}
 */
function deckRevealedIncreasing(deck) {
    deck.sort(function(a, b) {
        return a - b;
    });
    let res = [];
    res.push(deck[deck.length - 1]);
    for (let i = deck.length - 2; i >= 0; i--) {
        res.unshift(res.pop());
        res.unshift(deck[i]);
    }
    return res;
}

console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]));
