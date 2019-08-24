/**
 * @param {number[]} nums
 * @return {boolean}
 */
function xorGame(nums) {
    let xor = 0;
    for (let i of nums) {
        xor ^= i;
    }
    return xor === 0 || nums.length % 2 === 0;
}

console.log(xorGame([1,1,2]));
