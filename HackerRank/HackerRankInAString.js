// https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem

function hackerrankInString(s) {
    let str = "hackerrank";
    if (s.length < str.length) {
        return "NO";
    }
    let arr = s.split("");
    // console.log(arr);
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[j] === str[i]) {
                break;
            } else {
                arr.splice(j,1);
                j--;
            }
            if (arr.length  < str.length) {
                return "NO";
            }
        }
    }
    return "YES";
}

console.log(hackerrankInString("hereiamstackerrank"));
console.log(hackerrankInString("hackerworld"));