// https://www.hackerrank.com/challenges/funny-string/problem

function funnyString(s) {
    let arr = [];
    let value = [];
    for (let i = 0; i < s.length; i++) {
        arr.push(s.charCodeAt(i));
    }
    for (let j = 0; j < arr.length - 1; j++) {
        value.push(Math.abs(arr[j] - arr[j+1]));
    }
    return isPalindrome(value);
}

function isPalindrome(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return "Not Funny";
        }
    }
    return "Funny";
}
console.log(funnyString("acxz"));
console.log(funnyString("bcxz"));