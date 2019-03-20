/**
 * @param {number} num
 * @return {string}
 */
function convertToBase7(num) {
    return Number(num).toString(7);
}

console.log(convertToBase7(100));
console.log(convertToBase7(-7));
