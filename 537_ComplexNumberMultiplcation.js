/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function complexNumberMultiply(a, b) {
    let matchVars = (str) => str.slice(0, -1).split('+').map(n => Number.parseInt(n, 10))

    let [arl, aim] = matchVars(a);
    let [brl, bim] = matchVars(b);

    let [r, i] = [arl * brl + aim * bim * -1, arl * bim + aim * brl];
    return `${r}+${i}i`;
}

console.log(complexNumberMultiply("1+1i", "1+1i"));
console.log(complexNumberMultiply("1+-1i", "1+-1i"));
