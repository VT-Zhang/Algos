/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
function possibleBipartition(N, dislikes) {
    if (dislikes.length === 0) {
        return true;
    }
    let map = {}, groups = {};
    for (let i = 1; i < N + 1; i++) {
        map[i] = [];
    }
    dislikes.forEach(pairs => {
        let a = pairs[0];
        let b = pairs[1];
        map[a].push(b);
        map[b].push(a);
    });
    for (let i = 1; i < N + 1; i++) {
        if (!groups[i] && !dfs(i, 1)) {
            return false;
        }
    }
    return true;

    function dfs(node, color) {
        groups[node] = color;
        for (let neighbor of map[node]) {
            if (groups[neighbor] === color) {
                return false;
            }
            if (!groups[neighbor] && !dfs(neighbor, -color)) {
                return false;
            }
        }
        return true;
    }
}

console.log(possibleBipartition(4, [[1,2],[1,3],[2,4]]));
console.log(possibleBipartition(3, [[1,2],[1,3],[2,3]]));
console.log(possibleBipartition(5, [[1,2],[2,3],[3,4],[4,5],[1,5]]));

