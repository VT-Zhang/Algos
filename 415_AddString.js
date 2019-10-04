/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addStrings(num1, num2) {
    let arr = [];
    let l1 = num1.length - 1;
    let l2 = num2.length - 1;
    let carry = 0;
    while (l1 >= 0 || l2 >= 0) {
        let n1 = 0, n2 = 0;
        if (l1 >= 0) {
            n1 = parseInt(num1[l1]);
            l1--;
        }
        if (l2 >= 0) {
            n2 = parseInt(num2[l2]);
            l2--;
        }
        let res = (n1 + n2 + carry) % 10;
        carry = parseInt((n1 + n2 + carry) / 10);
        arr.unshift(res);
    }
    if (carry > 0) {
        arr.unshift(carry);
    }
    return arr.join("");
}

