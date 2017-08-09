// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
//
// If the last word does not exist, return 0.
//
// Note: A word is defined as a character sequence consists of non-space characters only.
//
// For example,
// Given s = "Hello World",
// return 5.

var lengthOfLastWord = function(s) {
    if(s === ""){
        return 0;
    }
    else{
        var arr = s.split(" ");
        var length = arr.length;
        for(var i = 0; i<arr.length; i++){
            if(arr[i] === ""){
                arr.splice(i, 1);
                i--;
                length--;
            }
        }
        if(arr.length){
            var result = arr[arr.length-1].length;
            console.log(result);
            return result;
        }
        else{
            return 0;
        }
    }
}

lengthOfLastWord("Hello world");
lengthOfLastWord("a ");
lengthOfLastWord("a  ");
lengthOfLastWord(" ");
