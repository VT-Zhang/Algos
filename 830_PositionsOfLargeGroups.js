// In a string S of lowercase letters, these letters form consecutive groups of the same character.
//
//     For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".
//
//     Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.
//
//     The final answer should be in lexicographic order.
//
//
//
//     Example 1:
//
// Input: "abbxxxxzzy"
// Output: [[3,6]]
// Explanation: "xxxx" is the single large group with starting  3 and ending positions 6.
// Example 2:
//
// Input: "abc"
// Output: []
// Explanation: We have "a","b" and "c" but no large group.
//     Example 3:
//
// Input: "abcdddeeeeaabbbcd"
// Output: [[3,5],[6,9],[12,14]]
//
//
// Note:  1 <= S.length <= 1000

/**
 * @param {string} S
 * @return {number[][]}
 */
function largeGroupPositions(S) {
    var map = {};
    var res = [];
    for (var i = 0; i < S.length - 2; i++) {
        if (!map[S[i]] && S[i] === S[i+1] && S[i+1] === S[i+2]) {
            map[S[i]] = 1;
        } else {
            map[S[i]]++;
        }
    }
    console.log(map);
    for (var key in map) {
        if (map[key] >= 3 && !isNaN(map[key])) {
            var flag = false;
            for (var j = 0; j < S.length - 1 ; j++) {
                if (S[j] === key && !flag && S[j] === S[j+1] && S[j+1] === S[j+2]) {
                    res.push([j]);
                    flag = true;
                }
                if (S[j] !== key && flag) {
                    res[res.length-1].push(j-1);
                    flag = false;
                }
            }
        }
    }
    return res;
}

console.log(largeGroupPositions("abbxxxxzzy"));
console.log(largeGroupPositions("abc"));
console.log(largeGroupPositions("abcdddeeeeaabbbcd"));