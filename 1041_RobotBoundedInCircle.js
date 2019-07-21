/**
 * @param {string} instructions
 * @return {boolean}
 */
function isRobotBounded(instructions) {
    let dir = 0, loc = [0, 0];
    for (let i = 0; i <instructions.length; i++) {
        let x = instructions.charAt(i);
        if (x === 'G') {
            loc = move(loc[0], loc[1], dir)
        } else {
            dir = turn(dir, x)
        }
    }

    return loc[0] === 0 && loc[1] === 0 || dir > 0;
}

let back = (pos) => pos - 1;
let forward = (pos) => pos + 1;

function move(x, y, direction) {
    let go = [
        [x, forward(y)],
        [forward(x), y],
        [x, back(y)],
        [back(x), y]
    ];
    return go[direction];
}


function turn(direction, x) {
    if (x === 'R') {
        direction += 1;
    }
    if (x === 'L') {
        direction += 3;
    }
    direction %= 4;
    return direction
}



console.log(isRobotBounded("GGLLGG"));
console.log(isRobotBounded("GG"));
console.log(isRobotBounded("GL"));
