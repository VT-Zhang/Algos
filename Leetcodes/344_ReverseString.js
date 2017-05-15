// Write a function that takes a string as input and returns the string reversed.
//
// Example:
// Given s = "hello", return "olleh".

var reverseString = function(s) {

    var arr = s.split("");
    var result = "";
    for (var i=arr.length-1; i>=0; i--){
        result += arr[i];
    }
    console.log(result);
    return result;

    // var arr = s.split("");
    // console.log(arr);
    // for(var i=0;i<arr.length/2;i++){
    //     for(var j=arr.length-1; j>arr.length/2-1; j--){
    //         var temp = arr[j];
    //         arr[j] = arr[i];
    //         arr[i] = temp;
    //         i++;
    //     }
    //     console.log(arr);
    //
    // }
    // var ns = "";
    // for(var k=0;k<arr.length;k++){
    //     ns += arr[k];
    // }
    // console.log(ns);
    // return ns;
};

reverseString("hello");
reverseString("a.");
