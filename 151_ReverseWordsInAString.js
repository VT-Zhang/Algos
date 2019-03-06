/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
}

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world!  "));
console.log(reverseWords("a good   example"));
