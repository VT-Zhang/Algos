// https://www.hackerrank.com/challenges/append-and-delete/problem

function appendAndDelete(s, t, k) {
    let commonLength = getLength(s, t);
    let remainder = s.length - commonLength + t.length - commonLength;
    if (k >= remainder) {
        return "Yes";
    } else {
        return "No";
    }
}

function getLength(s, t) {
    let length = 0;
    if (s.length < t.length) {
        length = s.length;
    } else {
        length = t.length;
    }
    for (let i = 0; i < length; i++) {
        if (s[i] !== t[i]) {
            return i;
        }
    }
    return length - 1;
}

console.log(appendAndDelete("hackerhappy", "hackerrank", 9));
console.log(appendAndDelete("ashley", "ash", 2));
console.log(appendAndDelete("abcd", "abcdert", 10));
