/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
function allPathsSourceTarget(graph) {
    let res = [];
    let path = [];
    path.push(0);

    dfs(0);

    function dfs(node) {
        if (node === graph.length - 1) {
            res.push(path.slice(0));
        } else {
            for (nextNode of graph[node]) {
                path.push(nextNode);
                dfs(nextNode);
                path.pop();
            }
        }
    }
    return res;
}

console.log(allPathsSourceTarget([[1,2], [3], [3], []] ));
