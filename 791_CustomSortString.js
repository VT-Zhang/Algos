// S and T are strings composed of lowercase letters. In S, no letter occurs more than once.
//
//     S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.
//
//     Return any permutation of T (as a string) that satisfies this property.
//
//     Example :
// Input:
//     S = "cba"
// T = "abcd"
// Output: "cbad"
// Explanation:
//     "a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a".
//     Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.
//
//
//     Note:
//
// S has length at most 26, and no character is repeated in S.
//     T has length at most 200.
// S and T consist of lowercase letters only.

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
function customSortString(S, T) {
    var map = {};
    var res = "";
    for (var i = 0; i < T.length; i++) {
        if (map[T[i]]) {
            map[T[i]]++;
        } else {
            map[T[i]] = 1;
        }
    }
    console.log(map);
    for (var j = 0; j < S.length; j++) {
        if (map[S[j]]) {
            while (map[S[j]] !== 0) {
                res += S[j];
                map[S[j]]--;
            }
        }
    }
    for (var key in map) {
        while (map[key] !== 0) {
            res += key;
            map[key]--;
        }
    }
    return res;
}

console.log(customSortString("cba", "abcd"));
