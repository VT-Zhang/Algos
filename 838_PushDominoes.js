/**
 * @param {string} dominoes
 * @return {string}
 */
function pushDominoes(dominoes) {
    let forces = Array(dominoes.length).fill(0);
    let force = 0;
    let res = "";
    for (let i = 0; i < dominoes.length; i++) {
        if (dominoes[i] === 'R') {
            force = dominoes.length;
        } else if (dominoes[i] === 'L') {
            force = 0;
        } else {
            force = Math.max(force - 1, 0);
        }
        forces[i] += force;
    }
    force = 0;
    for (let i = dominoes.length - 1; i >= 0; i--) {
        if (dominoes[i] === 'L') {
            force = dominoes.length;
        } else if (dominoes[i] === 'R') {
            force = 0;
        } else {
            force = Math.max(force - 1, 0);
        }
        forces[i] -= force;
    }
    for (let item of forces) {
        res += item > 0 ? 'R' : item < 0 ? 'L' : '.';
    }
    return res;
}

console.log(pushDominoes(".L.R...LR..L.."));
