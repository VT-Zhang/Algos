// https://www.hackerrank.com/challenges/reduced-string/problem

function superReducedString(s) {
    let arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            arr.splice(i,2);
            i = -1;
        }
    }
    if (arr.length !== 0) {
        return arr.join("");
    }
    return "Empty String";
}

console.log(superReducedString("aaabccddd"));
console.log(superReducedString("aa"));
console.log(superReducedString("baab"));
