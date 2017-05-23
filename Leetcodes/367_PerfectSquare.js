// Given a positive integer num, write a function which returns True if num is
// a perfect square else False.
//
// Note: Do not use any built-in library function such as sqrt.
//
// Example 1:
//
// Input: 16
// Returns: True
// Example 2:
//
// Input: 14
// Returns: False

var isPerfectSquare = function(num) {
    var x = num;
    while(x * x > num){
        x = (x + num/x) / 2;
    }
    if(x * x === num){
        return true;
    }
    else{
        return false;
    }
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(4));
console.log(isPerfectSquare(49));
console.log(isPerfectSquare(48));
