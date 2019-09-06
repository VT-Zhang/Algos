/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function longestCommonSubsequence(text1, text2) {
    let temp = [], max = 0;
    for (let i = 0; i <= text1.length; i++) {
        temp.push(new Array(text2.length + 1).fill(0));
    }
    for (let i = 1; i < temp.length; i++) {
        for (let j = 1; j < temp[0].length; j++) {
            if (text1[i-1] === text2[j-1]) {
                temp[i][j] = temp[i-1][j-1] + 1;
            } else {
                temp[i][j] = Math.max(temp[i-1][j], temp[i][j-1])
            }
            max = Math.max(max, temp[i][j]);
        }
    }
    return max;
}

console.log(longestCommonSubsequence("abcde", "ace"));
console.log(longestCommonSubsequence("abc", "abc"));
console.log(longestCommonSubsequence("abc", "def"));
