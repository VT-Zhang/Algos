/**
 * @param {number[][]} graph
 * @return {number[]}
 */
function eventualSafeNodes(graph) {
    let dp = {};
    let visited = new Set();
    for (let value = 0; value < graph.length; value++) {
        dfs(value);
    }

    return graph.map((v, i) => i).filter(i => !dp[i]);

    function dfs(value) {
        if (dp[value] !== undefined) {
            return dp[value];
        }
        let hasCycle = false;
        visited.add(value);
        for (let next of graph[value]) {
            if (visited.has(next) || dfs(next)) {
                hasCycle = true;
                break;
            }
        }
        visited.delete(value);

        dp[value] = hasCycle;
        return hasCycle;
    }
}

console.log(eventualSafeNodes([[1,2],[2,3],[5],[0],[5],[],[]]));
