/**
 * @param {number[][]} costs
 * @return {number}
 */
function twoCitySchedCost(costs) {
    let res = 0;
    let costsLength = costs.length / 2;
    costs.sort((a, b) => ((a[0] - a[1]) - (b[0] - b[1])));
    for (let i = 0; i < costsLength; i++) {
        res += (costs[i][0] + costs[i + costsLength][1]);
    }
    return res;
}

console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]));
