// Given an integer, write a function to determine if it is a power of two.

var isPowerOfTwo = function(n) {
    if(n === 0){
        console.log(false);
        return false;
    }
    while(n % 2 === 0){
        n /= 2;
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

isPowerOfTwo(-2);
isPowerOfTwo(-4);
isPowerOfTwo(0);
isPowerOfTwo(3);
isPowerOfTwo(6);
isPowerOfTwo(10);
isPowerOfTwo(1);
isPowerOfTwo(2);
isPowerOfTwo(4);
isPowerOfTwo(256);
isPowerOfTwo(1024);
