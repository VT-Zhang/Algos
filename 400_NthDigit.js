/**
 * @param {number} n
 * @return {number}
 */
function findNthDigit(n) {
    let base = 1, preCount = 0, count = 0;
    while (count < n) {
        preCount = count;
        count += base * 9 * Math.pow(10, base - 1);
        base++;
    }
    let left = n - preCount;
    let num = Math.pow(10, base - 2) + Math.ceil(left/(base-1)) - 1;
    let pos = left % (base - 1) - 1;
    num = ("" + num);
    if (pos < 0) {
        pos = num.length - 1;
    }
    return num[pos];
}

console.log(findNthDigit(3));
console.log(findNthDigit(11));
