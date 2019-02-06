// You are given n pairs of numbers. In every pair, the first number is always smaller than the second number.
//
//     Now, we define a pair (c, d) can follow another pair (a, b) if and only if b < c. Chain of pairs can be formed in this fashion.
//
//     Given a set of pairs, find the length longest chain which can be formed. You needn't use up all the given pairs. You can select pairs in any order.
//
// Example 1:
// Input: [[1,2], [2,3], [3,4]]
// Output: 2
// Explanation: The longest chain is [1,2] -> [3,4]
// Note:
//     The number of given pairs will be in the range [1, 1000].

/**
 * @param {number[][]} pairs
 * @return {number}
 */
function findLongestChain(pairs) {
    if (pairs.length <= 0) {
        return 0;
    }
    pairs.sort((a, b) =>
        a[1] - b[1]
    );
    let res = 1;
    let right = pairs[0][1];
    for (let i = 1; i < pairs.length; i++) {
        if (right < pairs[i][0]) {
            res++;
            right = pairs[i][1];
        }
    }
    return res;
}

// console.log(findLongestChain([[1,2], [2,3], [3,4]]));
// console.log(findLongestChain([[1,2], [2,3], [3,4], [1,2],[2,3],[3,4],[4,5]]));
// console.log(findLongestChain([[3,4],[2,3],[1,2]]));
// console.log(findLongestChain([[-10,-8],[8,9],[-5,0],[6,10],[-6,-4],[1,7],[9,10],[-4,7]]));
console.log(findLongestChain([[-6,9],[1,6],[8,10],[-1,4],[-6,-2],[-9,8],[-5,3],[0,3]]));
