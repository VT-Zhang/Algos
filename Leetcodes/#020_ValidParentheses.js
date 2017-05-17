// Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
//
// The brackets must close in the correct order, "()" and "()[]{}" are all valid
// but "(]" and "([)]" are not.

var isValid = function(s) {
    // 1. in pairs
    // 2. in orders
    // 3. open first, close last

    // var p1_counter = 0;
    // var p2_counter = 0;
    // var b1_counter = 0;
    // var b2_counter = 0;
    // var c1_counter = 0;
    // var c2_counter = 0;
    //
    // for(let i=0; i<s.length; i++){
    //     if(s[i]==="("){p1_counter++}
    //     if(s[i]===")"){p2_counter++}
    //     if(s[i]==="["){b1_counter++}
    //     if(s[i]==="]"){b2_counter++}
    //     if(s[i]==="{"){c1_counter++}
    //     if(s[i]==="}"){c2_counter++}
    // }
    // if(p1_counter !== p2_counter || c1_counter !== c2_counter || b1_counter !== b2_counter){
    //     console.log(false);
    //     return false;
    // }

    var p_counter = 0;
    var b_counter = 0;
    var c_counter = 0;
    for(let i=0; i<s.length; i++){
        while(p_counter >= 0 && b_counter >= 0 && c_counter >= 0){
            if(s[i]==="("){p_counter += 1}
            if(s[i]===")"){p_counter -= 1}
            if(s[i]==="["){b_counter += 1}
            if(s[i]==="]"){b_counter -= 1}
            if(s[i]==="{"){c_counter += 1}
            if(s[i]==="}"){c_counter -= 1}
        } 

    }

    console.log(true);
    return true;
};

isValid("()[]{}");
isValid("([)]}");
