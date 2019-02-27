/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique(nums) {
    let res = [];
    let visited = new Array(nums.length).fill(false);
    nums.sort((a, b) => a - b);

    function dfs(nums, current, visited) {
        if (current.length === nums.length) {
            res.push(current);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (visited[i] || i > 0 && nums[i] === nums[i-1] && !visited[i-1]) {
                continue;
            }
            visited[i] = true;
            dfs(nums, current.concat(nums[i]), visited);
            visited[i] = false;
        }
    }

    dfs(nums, [], visited);
    return res;
}

console.log(permuteUnique([1,1,2]));
