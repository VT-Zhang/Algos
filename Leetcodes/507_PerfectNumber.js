// We define the Perfect Number is a positive integer that is equal to the sum of
// all its positive divisors except itself.
//
// Now, given an integer n, write a function that returns true when it is a perfect
// number and false when it is not.
// Example:
// Input: 28
// Output: True
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// Note: The input number n will not exceed 100,000,000. (1e8)

var checkPerfectNumber = function(num) {
    //在给定的范围内，完美数字只有以下5个
    if(num===6||num===28||num==496||num==8128||num==33550336){
        console.log(true);
        return true;
    }
    console.log(false);
    return false;

    // 下面这种解法思路正确，但是Leetcode显示 Exceed Time Limits
    // var arr = [];
    // for(let i=0; i<num; i++){
    //     if(num % i === 0){
    //         arr.push(i);
    //     }
    // }
    // console.log(arr);
    // var sum = 0;
    // for(let i=0; i<arr.length; i++){
    //     sum += arr[i];
    // }
    // console.log(sum);
    // if(sum === num){
    //     console.log(true);
    //     return true;
    // }
    // else{
    //     console.log(false);
    //     return false;
    // }
};

checkPerfectNumber(28);
checkPerfectNumber(30402457);
