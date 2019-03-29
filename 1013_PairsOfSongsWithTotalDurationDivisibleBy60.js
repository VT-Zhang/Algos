/**
 * @param {number[]} time
 * @return {number}
 */
function numPairsDivisibleBy60(time) {
    let count = 0;
    if (time.length > 1) {
        for (let i = 0; i < time.length - 1; i++) {
            for (let j = i + 1; j < time.length; j++) {
                if ((time[i] + time[j]) % 60 === 0) {
                    count++;
                }
            }
        }
    }
    return count;
}

console.log(numPairsDivisibleBy60([30,20,150,100,40]));
console.log(numPairsDivisibleBy60([60,60,60]));
