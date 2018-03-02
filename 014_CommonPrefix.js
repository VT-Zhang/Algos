// Write a function to find the longest common prefix string amongst an array of strings.

function longestCommonPrefix (strs) {
    if (strs.length === 0) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }
    var prefix = '';
    var temp = '';
    for (var i = 0; i < strs[0].length; i++) {
        temp += strs[0][i];
    }
    for (var j = 0; j < temp.length; j++) {
        for (var k = 1; k < strs.length; k++) {
            if (strs[k][j] !== temp[j]) {
                return prefix;
            }
        }
        prefix += temp[j];
    }
    return prefix;
}

console.log(longestCommonPrefix(['predetermine', 'predator', 'previous']))
console.log(longestCommonPrefix(['condo', 'congrats', 'convict']))
console.log(longestCommonPrefix(['com', 'com', 'com']))
console.log(longestCommonPrefix([]))
console.log(longestCommonPrefix(['a']))