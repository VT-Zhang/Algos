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
    //counting how many digit of the number first
    var digit = 0;
    if(x > 1){
        digit++;
    }
    while(x/10 >= 1){
        x /= 10;
        digit++;
    }
    console.log(digit);
    count = digit;
    while(count>1){
        if(Math.floor(x/Math.pow(10,digit-1))) !== x % 10){
            return false;
        }
    }

};

isPalindrome(2222);

console.log(2222/Math.pow(10, 3));
console.log(2222%10);
