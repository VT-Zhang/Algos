/**
 * @param {number} num
 * @return {number}
 */
function findIntegers(num) {
    let res = 1;
    dfs(1);
    return res;

    function dfs(n) {
        if (n > num || (n & 3) === 3) {
            return;
        }
        res++;
        dfs(n * 2);
        dfs(n * 2 + 1);
    }
}

console.log(findIntegers(5));
