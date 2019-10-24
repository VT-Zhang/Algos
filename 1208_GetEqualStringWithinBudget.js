/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
function equalSubstring(s, t, maxCost) {
    let cost = 0, start = 0, max = 0;
    for (let i = 0; i < s.length; i++) {
        cost += getCost(s, t, i);
        while (cost > maxCost) {
            cost -= getCost(s, t, start);
            start += 1;
        }
        max = Math.max(max, i - start + 1);
    }

    return max;

    function getCost(s, t, i) {
        return Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
    }
}

console.log(equalSubstring("abcd", "bcdf", 3));
console.log(equalSubstring("abcd", "cdef", 3));
console.log(equalSubstring("abcd", "acde", 0));
