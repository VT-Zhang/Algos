/**
 * @param {number} n
 * @return {number}
 */
function tribonacci(n) {
    let arr = [0, 1 ,1];
    if (n < 3) {
        return arr[n];
    }
    for (let i = 3; i <=n; i++) {
        arr[i%3] = arr[0] + arr[1] + arr[2];
        if (i === n) {
            return arr[i%3];
        }
    }
    return -1;
}

console.log(tribonacci(4));
console.log(tribonacci(25));
