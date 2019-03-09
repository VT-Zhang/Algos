const BASIC = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const TWENTIES = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const HUNDREDS = ['Hundred'];
const THOUSANDS = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];

/**
 * @param {number} num
 * @return {string}
 */
function numberToWords(num) {
    if (num === 0) {
        return BASIC[0];
    }
    let res = '';
    for (let i = THOUSANDS.length - 1; i >= 0; i--) {
        let divider = Math.pow(1000, i);
        if (num < divider) {
            continue;
        }
        res += helper(Math.floor(num/divider));
        res += THOUSANDS[i] === '' ? '' : THOUSANDS[i] + ' ';
        num %= divider;
    }
    return res.substring(0, res.length - 1);
}

function helper(num) {
    let res = '';
    if (num >= 100) {
        res += BASIC[Math.floor(num/100)] + ' ';
        res += HUNDREDS[0] + ' ';
        num %= 100;
    }
    if (num >=20) {
        res += TWENTIES[Math.floor(num/10)] + ' ';
        num %= 10;
    }
    if (num > 0) {
        res += BASIC[num] + ' '
    }
    return res;
}

console.log(numberToWords(56));
console.log(numberToWords(123));
console.log(numberToWords(1234));
console.log(numberToWords(45678));

