// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
//
// For example:
//
// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
//
// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

var addDigits = function(num) {
    var temp = num;
    while(temp.length > 1){
        for(var i=0; i<num.length; i++){
            temp += num[i];
        }
        num = temp;
    }
    console.log(num);
};

addDigits(38);
