/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getPermutation(n, k) {
    let nums = ['1','2','3','4','5','6','7','8','9'];
    let v = 1;
    for (let i = 2; i < n; i++) {
        v *= i;
    }
    let res = '', pos;
    k = k - 1;
    while (n--) {
        pos = 0 | (k/v);
        res += nums[pos];
        k = k % v;
        v /= n;
        nums.splice(pos, 1);
    }
    return res;
}

console.log(getPermutation(3, 3));
console.log(getPermutation(4, 9));
