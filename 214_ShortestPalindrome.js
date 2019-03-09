/**
 * @param {string} s
 * @return {string}
 */
function shortestPalindrome(s) {
    let s0 = s;
    let s1 = s.split('').reverse().join('');
    let index = 0;
    for (let i = 0; i < s0.length; i++) {
        let sub0 = s0.substr(0, s0.length - i);
        let sub1 = s1.substr(i, s1.length - i);
        index = i;
        if (sub0 === sub1) {
            break;
        }
    }
    return s1.substring(0, index) + s0;
}

console.log(shortestPalindrome("aacecaaa"));
console.log(shortestPalindrome("abcd"));
