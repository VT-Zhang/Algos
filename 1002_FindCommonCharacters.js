/**
 * @param {string[]} A
 * @return {string[]}
 */
function commonChars(A) {
    let res = A[0].split('');
    let temp = [];
    for (let i = 1; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            let letter = A[i][j];
            let tempIndex = res.indexOf(letter);
            if (tempIndex > -1) {
                temp.push(letter);
                res.splice(tempIndex, 1);
            }
        }
        res = temp;
        temp = [];
    }
    return res;
}

console.log(commonChars(["bella","label","roller"]));
console.log(commonChars(["cool","lock","cook"]));
