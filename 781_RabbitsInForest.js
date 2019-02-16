/**
 * @param {number[]} answers
 * @return {number}
 */
function numRabbits(answers) {
    let array = [];
    let res = 0;
    for (let i of answers) {
        if (!array[i]) {
            array[i] = 1;
        } else {
            array[i] ++;
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            res += Math.floor((array[i] + i) / (i + 1)) * (i + 1);
        }
    }
    return res;
}

console.log(numRabbits([10, 10, 10]));
