/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
function numsSameConsecDiff(N, K) {
    let res = new Set();
    for (let i = 0; i <= 9; i++) {
        helper(N - 1, K, res, i);
    }
    return [...res];


    function helper(n, k, res, acc) {
        if (n === 0) {
            res.add(acc);
            return;
        }
        if (acc === 0) {
            return;
        }
        let lastNumber = acc % 10;
        let newValues = [
            lastNumber + k,
            lastNumber - k
        ];
        for (let value of newValues) {
            if (value < 0 || value > 9) {
                continue;
            }
            helper(n - 1, k, res, acc * 10 + value);
        }
    }
}

console.log(numsSameConsecDiff(3, 7));
console.log(numsSameConsecDiff(2, 1));
