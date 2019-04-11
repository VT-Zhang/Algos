/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
function backspaceCompare(S, T) {

    function reformat(string) {
        let res = [];
        let str = string.split('');
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== '#') {
                res.push(str[i])
            } else if (str[i] === '#') {
                res.pop();
            }
        }
        return res.join('');
    }

    return reformat(S) === reformat(T);
}

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a##c", "#a#c"));
console.log(backspaceCompare("a#c", "b"));
