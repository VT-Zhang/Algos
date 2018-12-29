/**
 * @param {string} str
 * @return {string}
 */
function toLowerCase(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        res += str[i].toLowerCase();
    }
    return res;
}

console.log(toLowerCase("HEllo"));
