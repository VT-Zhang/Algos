// Given an integer, write a function to determine if it is a power of three.
//
// Follow up:
// Could you do it without using any loop / recursion?

var isPowerOfThree = function(n) {
    if(n === 0){
        console.log(false);
        return false;
    }
    while(n % 3 === 0){
        n /= 3;
    }
    if(n === 1){
        console.log(true);
        return true;
    }
    else{
        console.log(false);
        return false;
    }
};

isPowerOfThree(0);
isPowerOfThree(1);
isPowerOfThree(6);
isPowerOfThree(12);
isPowerOfThree(-3);
isPowerOfThree(3);
isPowerOfThree(9);
isPowerOfThree(27);
