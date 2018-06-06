// https://www.hackerrank.com/challenges/two-strings/problem

function twoStrings(s1, s2) {
    let set1 = new Set();
    let set2 = new Set();
    for (let i = 0; i < s1.length; i++) {
        set1.add(s1[i]);
    }
    for (let i = 0; i < s2.length; i++) {
        set2.add(s2[i]);
    }
    for (let value of set1) {
        if (set2.has(value)) {
            return "YES";
        }
    }
    return "NO";
}

console.log(twoStrings("hello", "world"));
console.log(twoStrings("hi", "world"));