// You are climbing a stair case. It takes n steps to reach to the top.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you
// climb to the top?
//
// Note: Given n will be a positive integer.

var climbStairs = function(n) {
    var a = 1;
    var b = 1;
    while (n > 0){
        b += a;
        a = b - a;
        n--;
    }
    console.log(a);
    return a;
};

climbStairs(20);
