// https://www.hackerrank.com/challenges/pangrams/problem

function pangrams(s) {
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " ") {
            set.add(s[i].toLowerCase());
        }
    }
    if (set.size === 26) {
        return "pangram";
    }
    return "not pangram";
}

console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));
console.log(pangrams("We promptly judged antique ivory buckles for the prize"));