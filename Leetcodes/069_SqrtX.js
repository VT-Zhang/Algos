// Implement int sqrt(int x).
//
// Compute and return the square root of x.

var mySqrt = function(x) {
    if(x<0){
        console.log(false);
        return false;
    }
    var result = Math.sqrt(x);
    console.log(result);
    return result;
};

mySqrt(-1);
mySqrt(9);
mySqrt(81);
mySqrt(3);
