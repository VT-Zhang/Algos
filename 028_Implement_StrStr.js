// Implement strStr().
//
//     Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
//     Example 1:
//
// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:
//
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr (haystack, needle) {
    if (needle === '' || haystack === needle) {
        return 0;
    }
    for (var i = 0; i <= haystack.length - needle.length; i++) {
        var counter = 0;
        var flag = false;
        for (var j = i; j < needle.length + i; j++) {
            if (haystack[j] === needle[counter]) {
                flag = true;
            }
            else {
                flag = false;
                break;
            }
            // console.log(haystack[j]);
            // console.log(needle[counter]);
            // console.log("*****");
            counter++;
        }
        if (flag) {
            return i;
        }
    }
    return -1;
}

console.log(strStr('hello', 'll'))
console.log(strStr('aaaaa', 'bba'))
console.log(strStr('a', ''))
console.log(strStr('', ''))
console.log(strStr('a', 'a'))
console.log(strStr('mississippi', 'pi'))