/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
function validSquare(p1, p2, p3, p4) {
    let lengths = [];
    lengths.push(distance(p1, p2));
    lengths.push(distance(p1, p3));
    lengths.push(distance(p1, p4));
    lengths.push(distance(p2, p3));
    lengths.push(distance(p2, p4));
    lengths.push(distance(p3, p4));

    lengths = lengths.sort((a, b) => {
        return a - b;
    });

    if (lengths[3] === lengths[4] || lengths[4] !== lengths[5]) {
        return false;
    }

    if (!(lengths[0] === lengths[1] &&
        lengths[1] === lengths[2] &&
        lengths[2] === lengths[3])) {
        return false;
    }

    return true;

    function distance(p1, p2) {
        return Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
    }
}
