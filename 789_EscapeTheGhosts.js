/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
function escapeGhosts(ghosts, target) {
    for(let i = 0; i < ghosts.length; i++) {
        if(helper(ghosts[i]) < helper([0, 0])){
            return false;
        }
    }
    return true;

    function helper(arr) {
        return Math.abs(target[0] - arr[0]) + Math.abs(target[1] - arr[1]);
    }
}

console.log(escapeGhosts([[1, 0], [0, 3]], [0, 1]));
console.log(escapeGhosts([[1, 0]], [2, 0]));
console.log(escapeGhosts([[2, 0]], [1, 0]));
