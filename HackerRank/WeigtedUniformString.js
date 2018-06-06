// https://www.hackerrank.com/challenges/weighted-uniform-string/problem

function weightedUniformStrings(s, queries) {
    let map = {"a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6,
        "g": 7, "h": 8, "i": 9, "j": 10, "k": 11, "l": 12,
        "m": 13, "n": 14, "o": 15, "p": 16, "q": 17, "r": 18,
        "s": 19, "t": 20, "u": 21, "v": 22, "w": 23, "x": 24,
        "y": 25, "z": 26
    };
    let arr = [];
    let res = [];
    let temp = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) {
            temp += map[s[i+1]];
            arr.push(temp + map[s[i]]);
        } else {
            temp = 0;
            if (!arr.includes(map[s[i]])) {
                arr.push(map[s[i]]);
            }
        }
    }
    for (let i = 0; i < queries.length; i++) {
        if (arr.includes(queries[i])) {
            res.push("Yes");
        } else {
            res.push("No");
        }
    }
    return res;
}

console.log(weightedUniformStrings("abccddde", [6,1,3,12,5,9,10]));