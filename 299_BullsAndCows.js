/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
function getHint(secret, guess) {
    let map = {};
    let a = 0, b = 0;
    for (let i = 0; i < 10; i++) {
        map[i] = 0;
    }
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            a++;
        } else {
            map[secret[i]]++;
            b += map[secret[i]] <= 0 ? 1:0;
            map[guess[i]]--;
            b += map[guess[i]] >= 0 ? 1:0;
        }
    }
    return a + "A" + b + "B";
}

console.log(getHint("1807", "7810"));
console.log(getHint("1123", "0111"));
