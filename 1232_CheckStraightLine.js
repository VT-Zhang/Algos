/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
function checkStraightLine(coordinates) {
    let m = (coordinates[0][1] - coordinates[1][1]) / (coordinates[0][0] - coordinates[1][0]);
    let b = coordinates[0][1] - m * coordinates[0][0];
    for (let i = 1; i < coordinates.length; i++) {
        if (coordinates[i][1] !== m * coordinates[i][0] + b) {
            return false;
        }
    }
    return true;
}

console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]));
console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]));
