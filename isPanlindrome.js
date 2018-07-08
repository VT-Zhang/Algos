function isPalindrome (s) {
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("abcba"));
console.log(isPalindrome("aaaaa"));
console.log(isPalindrome("aaabb"));
