// Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.
//
//     Please note that the string does not contain any non-printable characters.
//
//     Example:
//
// Input: "Hello, my name is John"
// Output: 5

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(s.length == 0) {
        return 0;
    }
    var arr = [];
    var str = "";
    for(var i = 0; i < s.length; i++) {
        if(s[i] != " "){
            str += s[i];
        }
        if(s[i] == " ") {
            arr.push(str);
            str = "";
        }
    }
    console.log(arr);
    for(var j = 0; j < arr.length; j++) {
        if(arr[j] == "") {
            arr.splice(j,1);
            j--;
        }
    }
    console.log(arr);
    var res = arr.length;
    if(s[s.length-1] != " ") {
        res++;
    }
    return res;
};

console.log(countSegments(" Hello, my name is John "));
console.log(countSegments("Hello, my name is John "));
console.log(countSegments("Hello, my name  is John"));
console.log(countSegments(""));
console.log(countSegments("        "));