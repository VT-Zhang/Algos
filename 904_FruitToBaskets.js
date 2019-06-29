/**
 * @param {number[]} tree
 * @return {number}
 */
function totalFruit(tree) {
    let res = 0;
    if (!tree || !tree.length) return res;
    let map = new Map();
    for (let i = 0, j = 0; j < tree.length; j++) {
        map.set(tree[j], (map.get(tree[j]) || 0) + 1);
        while (map.size > 2) {
            map.set(tree[i], map.get(tree[i]) - 1);
            if (map.get(tree[i]) === 0) {
                map.delete(tree[i]);
            }
            i++;
        }
        res = Math.max(res, j - i + 1);
    }
    return res;
}

console.log(totalFruit([1, 2, 1]));
console.log(totalFruit([0, 1, 2, 2]));
console.log(totalFruit([1, 2, 3, 2, 2]));
