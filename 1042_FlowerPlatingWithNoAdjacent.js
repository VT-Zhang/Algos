/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
function gardenNoAdj(N, paths) {
    let map = {};
    for (let i = 1; i <= N; i++) {
        map[i] = [];
    }

    for (let path of paths) {
        map[path[0]].push(path[1]);
        map[path[1]].push(path[0]);
    }

    let res = new Array(N).fill(0);
    for (let i = 1; i <= N; i++) {
        let set = new Set();
        for (let i = 1; i <= 4; i++) {
            set.add(i);
        }
        for (let next of map[i]) {
            if (set.has(res[next-1])) {
                set.delete(res[next-1]);
            }
        }
        res[i-1] = set.values().next().value;
    }
    return res;
}

console.log(gardenNoAdj(3, [[1,2],[2,3],[3,1]]));
console.log(gardenNoAdj(4, [[1,2],[3,4]]));
