// Given a string and an integer k, you need to reverse the first k characters
// for every 2k characters counting from the start of the string. If there are
// less than k characters left, reverse all of them. If there are less than 2k
// but greater than or equal to k characters, then reverse the first k characters
// and left the other as original.
// Example:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Restrictions:
// The string consists of lower English letters only.
// Length of the given string and k will in the range [1, 10000]

var reverseStr = function(s, k) {
    var arr = s.split("");
    for(var i=0;i<arr.length; i++){
        for(var j=i; j<k/2; j++){
            for(var l=j+k; l>k/2; l--){
                var temp = arr[l];
                arr[l] = arr[j];
                arr[j] = temp;
                j++
            }
            
        }
    }
};
