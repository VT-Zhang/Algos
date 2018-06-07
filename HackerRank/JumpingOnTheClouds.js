// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
    let res = 0;
    let i = 0;
    while (i < c.length - 1) {
        if (c[i+2] === 1) {
            res++;
            i += 1;
        } else {
            res++;
            i += 2;
        }
    }
    return res;
}


console.log(jumpingOnClouds([0,0,1,0,0,1,0]));
console.log(jumpingOnClouds([0,0,0,1,0,0]));