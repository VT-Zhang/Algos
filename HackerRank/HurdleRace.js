// https://www.hackerrank.com/challenges/the-hurdle-race/problem

function hurdleRace(k, height) {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        if (max < height[i]) {
            max = height[i];
        }
    }
    if (max > k) {
        return max - k;
    }
    return 0;
}

console.log(hurdleRace(4, [1,6,3,5,2]));