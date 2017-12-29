// Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.
//
//     The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.
//
//     Example 1:
// Input: "UD"
// Output: true
// Example 2:
// Input: "LL"
// Output: false

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var h = 0, v = 0;
    for(var i = 0; i < moves.length; i++) {
        if(moves[i] == "U") {
            v++;
        }
        if(moves[i] == "D") {
            v--;
        }
        if(moves[i] == "R") {
            h++;
        }
        if(moves[i] == "L") {
            h--;
        }
    }
    if(v != 0 || h != 0) {
        return false;
    }
    return true;
};

console.log(judgeCircle("UD"));
console.log(judgeCircle("LL"));
console.log(judgeCircle("UDLR"));