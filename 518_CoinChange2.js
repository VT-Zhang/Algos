/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
function change(amount, coins) {
    let arr = new Array(amount + 1).fill(0);
    arr[0] = 1;

    for (let coin of coins) {
        for (let i = coin; i < arr.length; i++) {
            arr[i] += arr[i - coin];
        }
    }
    return arr[amount];
}

console.log(change(5, [1, 2, 5]));
