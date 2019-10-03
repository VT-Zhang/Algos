/**
 * @param {number[][]} points
 * @return {number}
 */
function numberOfBoomerangs(points) {
    let len = points.length, res = 0;

    for (let i = 0; i < len; i++) {
        let map = new Map();
        for (let j = 0; j < len; j++) {
            if (i !== j) {
                let distance = getDistance(points[i], points[j]);
                map.set(distance, (map.get(distance) || 0) + 1);
            }
        }
        for (let item of map.values()) {
            res += item * (item - 1);
        }
    }
    return res;

    function getDistance(a, b) {
        let xDis = a[0] - b[0];
        let yDis = a[1] - b[1];
        return xDis * xDis + yDis * yDis;
    }
}

console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]));
