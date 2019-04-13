/**
 * @param {number[][]} points
 * @return {number}
 */
function largestTriangleArea(points) {
    let maxArea = 0;
    for (let i = 0; i < points.length; i++) {
        for (let j = 1; j < points.length; j++) {
            for (let k = 2; k < points.length; k++) {
                if (i !== j && i !== k && j !== k) {
                    maxArea = Math.max(getArea(points[i], points[j], points[k]), maxArea);
                }
            }
        }
    }
    return maxArea;
}

function getArea([x1, y1], [x2, y2], [x3, y3]) {
    return Math.abs(((x2 - x1) * (y3 - y1)) - ((x3 - x1) * (y2 - y1))) / 2
}

console.log(largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]));
