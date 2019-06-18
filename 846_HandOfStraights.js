/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
function isNStraightHand(hand, W) {
    if (hand.length % W !== 0) {
        return false;
    }
    hand.sort((function(a, b) {
        return a - b;
    }));
    let map = new Map();
    for (let card of hand) {
        map.set(card, (map.get(card) || 0) + 1);
    }

    for (let [card, count] of map) {
        if (count > 0) {
            for (let i = 1; i < W; i++) {
                if ((map.get(card + i) || 0) < count) {
                    return false;
                }
                map.set(card + i, map.get(card + i) - count);
            }
        }
    }
    return true;
}

console.log(isNStraightHand([1,2,3,4,5], 4));
