// https://www.hackerrank.com/challenges/anagram/problem

function anagram(s) {
    if (s.length % 2 === 1) {
        return -1;
    }
    let map = {};
    let count = 0;
    for (let i = 0; i < s.length / 2; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }
    // console.log(map);
    for (let i = s.length / 2; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]--;
        } else {
            count++;
        }
    }
    return count;
}

console.log(anagram("aaabbb"));
console.log(anagram("ab"));
console.log(anagram("abc"));
console.log(anagram("mnop"));
console.log(anagram("xyyx"));
console.log(anagram("xaxbbbxx"));
