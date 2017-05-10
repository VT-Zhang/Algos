// Write a program that outputs the string representation of numbers from 1 to n.
//
// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
//
// Example:
//
// n = 15,
//
// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

var fizzBuzz = function(n) {
    var result = [];
    var num = 1;
    while (num <= n){
        if(num % 3 === 0 && num % 5 !== 0){
            result.push("Fizz");
        }
        else if(num % 5 === 0 && num % 3 !== 0){
            result.push("Buzz");
        }
        else if(num % 3 === 0 && num % 5 === 0){
            result.push("FizzBuzz");
        }
        else{
            result.push(''+num+'');
        }
        num++;
    }
    console.log(result);

};

fizzBuzz(15);
