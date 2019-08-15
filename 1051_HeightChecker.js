/**
 * @param {number[]} heights
 * @return {number}
 */
function heightChecker(heights) {
    let res = 0;
    let sorted = heights.slice();
    sorted.sort((a, b) => a - b);
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sorted[i]) {
            res++;
        }
    }
    return res;
}

console.log(heightChecker([1,1,4,2,1,3]));
