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
    var result = ""
    console.log(arr);
    var counter = 0;
    for(var i=0; i<arr.length; i++){
        if(counter === 0){
            for(var j=i+k-1; j>=i; j--){
                result += arr[j];
            }
            console.log(result);
        }
        counter = k;
        i += k;
        while(counter > 0){
            result += arr[i];
            i++;
            counter--;
        }
        console.log(result);
        // if(reverse === false){
        //     for(var l=i; i<=k; l++){
        //         console.log(l);
        //         result += arr[l];
        //     }
        //     reverse = true;
        // }
    }
    console.log(result);
};

reverseStr("abcdefg", 2);
