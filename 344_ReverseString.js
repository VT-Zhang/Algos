// Write a function that takes a string as input and returns the string reversed.
//
// Example:
// Given s = "hello", return "olleh".

function reverseString (s) {
    var arr = s.split("");
    var result = "";
    for (var i = arr.length - 1; i >= 0; i--){
        result += arr[i];
    }
    return result;
}

console.log(reverseString("hello"));
console.log(reverseString("a."));
