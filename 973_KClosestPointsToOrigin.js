/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
function kClosest(points, K) {
    points = points.sort(function(a, b) {
        return a[0] * a[0] + a[1] * a[1] - (b[0] * b[0] + b[1] * b[1]);
    });
    return points.slice(0, K);
}

console.log(kClosest([[3,3],[5,-1],[-2,4]], 2));
