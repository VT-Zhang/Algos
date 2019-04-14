/**
 * @param {number[]} deck
 * @return {boolean}
 */
function hasGroupsSizeX(deck) {
    let map = {};
    for (let i = 0; i < deck.length; i++) {
        if (!map[deck[i]]) {
            map[deck[i]] = 1;
        } else {
            map[deck[i]]++;
        }
    }
    let minX;
    for (let key in map) {
        if (minX === undefined) {
            minX = map[key];
            continue;
        }
        minX = gdc(minX, map[key]);
        if (minX < 2) {
            return false;
        }
    }
    return minX >= 2;
}

function gdc(a, b) {
    if (!b) {
        return a;
    }
    return gdc(b, a % b);
}

console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]));
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]));
console.log(hasGroupsSizeX([1]));
console.log(hasGroupsSizeX([1,1]));
console.log(hasGroupsSizeX([1,1,2,2,2,2]));
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3,3]));
