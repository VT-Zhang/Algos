/**
 * @param {number} num
 * @return {number}
 */
function findComplement(num) {
    if (num === 0) return 1;
    let i = 0;
    while (Math.pow(2, i) <= num) {
        i += 1;
    }
    return num ^ (Math.pow(2, i) - 1);
}
