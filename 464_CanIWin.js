/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
function canIWin(maxChoosableInteger, desiredTotal) {
    if (desiredTotal <= 0) return true;
    if (maxChoosableInteger >= desiredTotal) return true;
    if ((maxChoosableInteger + 1) * (maxChoosableInteger / 2) < desiredTotal) return false;

    return canWin(desiredTotal, 0, new Map(), maxChoosableInteger);
}

function canWin(total, position, cache, n) {
    if (total < 1) {
        return false;
    }
    if (cache.has(position)) {
        return cache.get(position);
    }
    for (let i = 1; i <= n; i++) {
        if (position & (1 << i)) {
            continue;
        }
        position |= 1 << i;
        const isWinningMove = !canWin(total - i, position, cache, n);
        position &= ~(1 << i);
        if (isWinningMove) {
            return cache.set(position, true).get(position);
        }
    }
    cache.set(position, false);
    return false;
}

console.log(canIWin(10, 11));
