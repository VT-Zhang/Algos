/**
 * @param {number[]} bills
 * @return {boolean}
 */
function lemonadeChange(bills) {
    let five = 0;
    let ten = 0;
    for (let bill of bills) {
        if (bill === 5) {
            five++;
        } else if (bill === 10) {
            ten++;
            five--;
        } else if (ten > 0) {
            ten--;
            five--;
        } else {
            five -= 3;
        }
        if (five < 0) {
            return false;
        }
    }
    return true;
}

console.log(lemonadeChange([5,5,5,10,20]));
console.log(lemonadeChange([5,5,10,10,20]));
