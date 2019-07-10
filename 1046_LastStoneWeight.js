/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        let temp = stones.pop() - stones.pop();
        if (temp) {
            stones.push(temp);
        }
    }
    return stones.length ? stones[0]: 0;
}

console.log(lastStoneWeight([2,7,4,1,8,1]));
