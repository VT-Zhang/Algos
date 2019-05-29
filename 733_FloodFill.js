/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
function floodFill(image, sr, sc, newColor) {
    let stack = [];
    let color = image[sr][sc];
    if (image[sr][sc] !== newColor) {
        stack.push([sr, sc]);
    }
    let current = null;
    while (stack.length > 0) {
        current = stack.pop();
        let x = current[0];
        let y = current[1];
        if (image[x][y] === color) {
            image[x][y] = newColor;
            if (x >= 1) {
                stack.push([x - 1, y]);
            }
            if (y >= 1) {
                stack.push([x, y - 1]);
            }
            if (x + 1 < image.length) {
                stack.push([x + 1, y]);
            }
            if (y + 1 < image[0].length) {
                stack.push([x, y + 1]);
            }
        }
    }
    return image;
}

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2))
