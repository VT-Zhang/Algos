// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
//     Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water,
//     and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" ' +
// '(water inside that isn't connected to the water around the island). One cell is a square with side length 1.
// The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
//
// Example:
//
//     [[0,1,0,0],
//     [1,1,1,0],
//     [0,1,0,0],
//     [1,1,0,0]]
//
// Answer: 16
// Explanation: The perimeter is the 16 yellow stripes in the image below:

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var counter = 0;
    var x = grid.length;
    var y = grid[0].length;
    for(var i = 0; i < x; i++) {
        for(var j = 0; j < y; j++) {
            if(grid[i][j] == 1) {
                if(i == 0 || grid[i-1][j] == 0) {
                    counter++;
                }
                if(i == x - 1 || grid[i+1][j] == 0) {
                    counter++;
                }
                if(j == 0 || grid[i][j-1] == 0) {
                    counter++;
                }
                if(j == y - 1 || grid[i][j+1] == 0) {
                    counter++;
                }
            }
        }
    }
    return counter;
};

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));