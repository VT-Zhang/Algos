/**
 * @param {string} S
 * @return {string}
 */
function reverseOnlyLetters(S) {
    let arr = [];
    let special = [];
    for (let i = 0; i < S.length; i++) {
        if (/[a-zA-Z]/.test(S[i])) {
            arr.push(S[i]);
        } else {
            special.push(i);
            special.push(S[i]);
        }
    }
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    for (let i = 0; i < special.length; i = i + 2) {
        arr.splice(special[i], 0, special[i+1]);
    }
    return arr.join("");
}

console.log(reverseOnlyLetters("ab-cd"));
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));
