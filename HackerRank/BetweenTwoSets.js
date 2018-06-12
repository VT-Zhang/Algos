// https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        let flag = true;
        for (let j = 0; j < a.length; j++){
            if (b[i] % a[j] !== 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            count++;
        }
    }
    return count;
}

console.log(getTotalX([2,4],[16,32,96,5]));