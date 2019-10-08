/**
 * @param {number} n
 * @return {number}
 */
function integerReplacement(n) {
    let arr = [];

    return helper(n);

    function helper(n) {
        if (n === 1) {
            return 0;
        }
        if (arr[n]) {
            return arr[n];
        }
        if (n % 2 === 0) {
            arr[n] = helper(n / 2) + 1;
        } else {
            let a = helper(n - 1) + 1;
            let b = helper((n + 1) / 2) + 2;
            arr[n] = Math.min(a, b);
        }
        return arr[n];
    }
}

console.log(integerReplacement(8));
console.log(integerReplacement(7));
