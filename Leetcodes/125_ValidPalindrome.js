// Given a string, determine if it is a palindrome, considering only alphanumeric
// characters and ignoring cases.
//
// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.
//
// Note:
// Have you consider that the string might be empty? This is a good question to
// ask during an interview.
//
// For the purpose of this problem, we define empty string as valid palindrome.

var isPalindrome = function(s) {
    if(s===""){
        return true;
    }
    var ns = "";
    for(let i=0;i<s.length;i++){
        if(s[i].match(/[0-9a-zA-Z]/)){
            ns += s[i].toLowerCase();
        }
    }
    console.log(ns);
    var left = 0;
    var right = ns.length - 1;
    while(left <= ns.length/2){
        if(ns[left] !== ns[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};

console.log(isPalindrome(""));
console.log(isPalindrome("museum"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("Race car"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("0P"));
