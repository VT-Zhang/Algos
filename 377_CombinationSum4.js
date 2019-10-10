/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function combinationSum4(nums, target) {
    let cache = {};
    for(let i = 1; i <= target; i++){
        for(let j = 0; j < nums.length; j++){
            if(!cache[i]) {
                cache[i] = 0;
            }
            if(i === nums[j]) {
                cache[i]++;
            }
            else if(i > nums[j]) {
                cache[i] += cache[i-nums[j]];
            }
        }
    }
    return cache[target] ? cache[target] : 0;
}

console.log(combinationSum4([1,2,3], 4));
