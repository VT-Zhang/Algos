// https://www.hackerrank.com/challenges/alternating-characters/problem

function alternatingCharacters(s) {
    let count = 0;
    let arr = s.split("");
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i+1]) {
            arr.splice(i,1);
            count++;
            i--;
        }
    }
    return count;
}

console.log(alternatingCharacters("AAABBB"));
console.log(alternatingCharacters("AAAA"));
console.log(alternatingCharacters("BBBBB"));
console.log(alternatingCharacters("ABABABAB"));

