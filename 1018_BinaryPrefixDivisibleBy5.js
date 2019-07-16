/**
 * @param {number[]} A
 * @return {boolean[]}
 */
function prefixesDivBy5(A) {
    let num = 0;
    let res = [];
    for (let a of A) {
        num = (num * 2 + a) % 5;
        res.push(!num)
    }
    return res;
}

console.log(prefixesDivBy5([0,1,1]));
console.log(prefixesDivBy5([1,1,1]));
console.log(prefixesDivBy5([0,1,1,1,1,1]));
console.log(prefixesDivBy5([1,1,1,0,1]));
