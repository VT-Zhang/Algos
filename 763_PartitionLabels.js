// A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each
// letter appears in at most one part, and return a list of integers representing the size of these parts.
//
//     Example 1:
// Input: S = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
//     The partition is "ababcbaca", "defegde", "hijhklij".
//     This is a partition so that each letter appears in at most one part.
//     A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
//     Note:
//
// S will have length in range [1, 500].
//     S will consist of lowercase letters ('a' to 'z') only.

/**
 * @param {string} S
 * @return {number[]}
 */
function partitionLabels(S) {
    let n = S.length;
    let idxs = [];
    let res = [];
    for (let i = 0; i < n; i++) {
        idxs[S[i]] = i;
    }
    let bound = 0;
    let l = 0;
    for (let i = 0; i < n; i++) {
        bound = Math.max(bound, idxs[S[i]]);
        if (bound === i) {
            res.push(i - l + 1);
            l = i + 1;
        }
    }
    return res;
}

console.log(partitionLabels("ababcbacadefegdehijhklij"));
