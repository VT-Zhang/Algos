// Given a column title as appear in an Excel sheet, return its
// corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 

function titleToNumber(s) {
    var result = 0;
    var exp = 0;
    for(var i = s.length - 1; i >= 0; i--){
        var v = s.charCodeAt(i) - 64;
        v = v * Math.pow(26, exp);
        exp++;
        result += v;
    }
    console.log(result);
    return result;
};

titleToNumber('AD');
titleToNumber('AC');
titleToNumber('AB');
titleToNumber('AA');
titleToNumber('Z');
titleToNumber('A');
titleToNumber('B');