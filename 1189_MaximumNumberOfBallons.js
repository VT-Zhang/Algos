/**
 * @param {string} text
 * @return {number}
 */
function maxNumberOfBalloons(text) {
    let map = {"b": 0, "a": 0, "l": 0, "o": 0, "n": 0};
    let result = Infinity;

    for (let i = 0; i < text.length; i++) {
        if (map[text[i]] !== undefined) {
            map[text[i]] += 1;
        }
    }

    for (let key in map) {
        let count = map[key];
        if (count === 0) {
            return 0;
        }
        count = (key === "l" || key === "o") ? Math.floor(count / 2) : count;
        result = Math.min(result, count);
    }

    return result;
}

console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));
