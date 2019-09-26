/**
 * @param {number} num
 * @return {string[]}
 */
function readBinaryWatch(num) {
    let result = [];
    for (let i = 0; i <= 11; i++) {
        for (let j = 0; j <= 59; j++) {
            if ((countSetBit(i) + countSetBit(j)) === num) {
                result.push(i + (j < 10 ? ':0' : ':') + j);
            }
        }
    }
    return result;
}

function countSetBit(num) {
    let binary = num.toString(2);
    let count = 0;
    for (let i = 0; i< binary.length; i++) {
        if (binary[i] === "1") {
            count++;
        }
    }
    return count;
}

console.log(readBinaryWatch(1));
// console.log(readBinaryWatch(2));
