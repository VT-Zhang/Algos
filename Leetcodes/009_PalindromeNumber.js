// Determine whether an integer is a palindrome. Do this without extra space.
//
// Some hints:
// Could negative integers be palindromes? (ie, -1)
//
// If you are thinking of converting the integer to string, note the restriction
// of using extra space.
//
// You could also try reversing an integer. However, if you have solved the
// problem "Reverse Integer", you know that the reversed integer might overflow.
// How would you handle such case?
//
// There is a more generic way of solving this problem.

var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    var i = 1;
    while(x/i >= 10){
        i *= 10;
    }
    console.log("This is i", i);
    while(x > 0){
        var left = parseInt(x/i);
        console.log("Left now is", left);
        var right = x % 10;
        console.log("Right now is", right);
        if(left !== right){
            console.log(false);
            return false;
        }
        x = x % i; //remove the leftmost digit
        x = parseInt(x/10) //remove the rightmost digit
        i /= 100;
    }
    console.log(true);
    return true;
};

isPalindrome(11211);
isPalindrome(6345436);
isPalindrome(88);
